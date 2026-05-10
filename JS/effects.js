if (!document.getElementById('custom-cursor')) {
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);
}

const cursor = document.getElementById('custom-cursor');

/* --- RATO PERSONALIZADO --- */
window.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

/* --- SELETORES INTERATIVOS --- */
const clickables = document.querySelectorAll('a, button, details summary, .lang-btn, .btn-cta, .btn-candidata, video, .saida-row, .parceiro-link');

clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
        cursor.style.backgroundColor = 'rgba(255, 238, 0, 0.5)';
        cursor.style.borderColor = '#ffffff';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'rgba(255, 238, 0, 0.1)';
        cursor.style.borderColor = '#ffee00';
    });
});

/* --- PARTICULAS GEOMÉTRICAS --- */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffee00" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 2 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    }
  }
});