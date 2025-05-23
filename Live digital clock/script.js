function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const date = now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

    document.getElementById('clock').textContent = ${hours}:${minutes}:${seconds};
    document.getElementById('date').textContent = ${day}, ${date};
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display time immediately