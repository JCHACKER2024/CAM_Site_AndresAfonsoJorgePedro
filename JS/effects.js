/* CUSTOM CURSOR (RATO PERSONALIZADO) */

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
    if (!document.getElementById('custom-cursor')) {
        const cursorDiv = document.createElement('div');
        cursorDiv.id = 'custom-cursor';
        document.body.appendChild(cursorDiv);
    }

    const cursor = document.getElementById('custom-cursor');
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        requestAnimationFrame(() => {
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });
    });

    const targetSelectors = 'a, button, details summary, .lang-btn, .btn-cta, .btn-candidata, video, .saida-row, .parceiro-link';

    window.addEventListener('mouseover', (e) => {
        if (e.target.closest(targetSelectors)) {
            cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
            cursor.style.backgroundColor = 'rgba(255, 238, 0, 0.5)';
            cursor.style.borderColor = '#ffffff';
        }
    });

    window.addEventListener('mouseout', (e) => {
        if (e.target.closest(targetSelectors)) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'rgba(255, 238, 0, 0.1)';
            cursor.style.borderColor = '#ffee00';
        }
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
}

/* PARTÍCULAS GEOMÉTRICAS (particles.js) */

if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": { 
                "value": 80, 
                "density": { "enable": true, "value_area": 800 } 
            },
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
            "move": { 
                "enable": true, 
                "speed": 0.8 
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" }
            }
        }
    });
}