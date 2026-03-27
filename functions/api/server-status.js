export async function onRequestGet() {
  const host = "play.drcelestial.net";
  const port = 25565;

  try {
    const response = await fetch(`https://api.mcsrvstat.us/3/${host}`, {
      headers: {
        "accept": "application/json"
      },
      cf: {
        cacheTtl: 30,
        cacheEverything: false
      }
    });

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return new Response(
        JSON.stringify({
          online: false,
          hostname: host,
          ip: null,
          port,
          version: null,
          software: null,
          motd: { clean: ["Status unavailable."] },
          players: { online: null, max: null, list: [] },
          error: "Upstream did not return JSON."
        }),
        {
          status: 200,
          headers: {
            "content-type": "application/json; charset=UTF-8",
            "cache-control": "no-store"
          }
        }
      );
    }

    return new Response(
      JSON.stringify({
        online: !!data.online,
        hostname: host,
        ip: data.ip || null,
        port: data.port || port,
        version: data.version || null,
        software: data.software || null,
        motd: data.motd || { clean: ["No MOTD available."] },
        players: {
          online: data.players?.online ?? null,
          max: data.players?.max ?? null,
          list: Array.isArray(data.players?.list) ? data.players.list : []
        },
        error: data.online
          ? null
          : (data.debug?.error?.ping || data.debug?.error?.query || null)
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json; charset=UTF-8",
          "cache-control": "no-store"
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        online: false,
        hostname: host,
        ip: null,
        port,
        version: null,
        software: null,
        motd: { clean: ["Status unavailable."] },
        players: {
          online: null,
          max: null,
          list: []
        },
        error: error instanceof Error ? error.message : "Failed to query server."
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json; charset=UTF-8",
          "cache-control": "no-store"
        }
      }
    );
  }
}