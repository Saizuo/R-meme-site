function partyTime() {
    document.body.classList.toggle('party-mode');
    
    // Create random Rs
    for (let i = 0; i < 20; i++) {
        const r = document.createElement('div');
        r.textContent = 'R';
        r.style.position = 'fixed';
        r.style.left = Math.random() * 100 + 'vw';
        r.style.top = Math.random() * 100 + 'vh';
        r.style.fontSize = (Math.random() * 50 + 20) + 'px';
        r.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        r.style.transform = `rotate(${Math.random() * 360}deg)`;
        r.style.transition = 'all 1s';
        
        document.body.appendChild(r);
        
        setTimeout(() => {
            document.body.removeChild(r);
        }, 1000);
    }
}

// Easter egg: Press 'R' key
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r') {
        partyTime();
    }
});

// Add this to your existing JavaScript
function createSparkles() {
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.background = `rgb(
            ${155 + Math.random() * 100},
            ${155 + Math.random() * 100},
            ${155 + Math.random() * 100}
        )`;
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            document.body.removeChild(sparkle);
        }, 1500);
    }, 50);
}

// Call this when the page loads
document.addEventListener('DOMContentLoaded', createSparkles);
