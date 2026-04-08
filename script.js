const blobs = document.querySelectorAll('.blob');

blobs.forEach(blob => {
  setInterval(() => {
    const x = Math.random() * 100 - 50;
    const y = Math.random() * 100 - 50;
    blob.style.transform = `translate(${x}px, ${y}px)`;
  }, 8000);
});