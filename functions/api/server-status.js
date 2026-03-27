export async function onRequestGet() {
  const host = "play.drcelestial.net";

  try {
    const response = await fetch(
      `https://api.mcstatus.io/v2/status/java/${encodeURIComponent(host)}?query=true&timeout=5`,
      {
        headers: {
          accept: "application/json",
        },
        cf: {
          cacheTtl: 30,
          cacheEverything: false,
        },
      }
    );

    if (!response.ok) {
      const text = await response.text();
      return new Response(
        JSON.stringify({
          online: false,
          hostname: host,
          ip: null,
          port: 25565,
          version: null,
          software: null,
          motd: { clean: ["Status unavailable."] },
          players: { online: null, max: null, list: [] },
          error: `Upstream error ${response.status}: ${text || "Unknown error"}`,
        }),
        {
          status: 200,
          headers: {
            "content-type": "application/json; charset=UTF-8",
            "cache-control": "no-store",
          },
        }
      );
    }

    const data = await response.json();

    return new Response(
      JSON.stringify({
        online: !!data.online,
        hostname: data.host || host,
        ip: data.ip_address || null,
        port: data.port || 25565,
        version: data.version?.name_clean || data.version?.name_raw || null,
        software: data.software || null,
        motd: {
          clean: Array.isArray(data.motd?.clean)
            ? data.motd.clean
            : typeof data.motd?.clean === "string"
              ? [data.motd.clean]
              : ["No MOTD available."],
        },
        players: {
          online: data.players?.online ?? null,
          max: data.players?.max ?? null,
          list: Array.isArray(data.players?.list)
            ? data.players.list.map((p) =>
                typeof p === "string" ? p : p?.name_clean || p?.name_raw || null
              ).filter(Boolean)
            : [],
        },
        error: data.online ? null : "Server reported offline or did not return full status.",
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json; charset=UTF-8",
          "cache-control": "no-store",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        online: false,
        hostname: host,
        ip: null,
        port: 25565,
        version: null,
        software: null,
        motd: { clean: ["Status unavailable."] },
        players: { online: null, max: null, list: [] },
        error: error instanceof Error ? error.message : "Failed to query server.",
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json; charset=UTF-8",
          "cache-control": "no-store",
        },
      }
    );
  }
}
