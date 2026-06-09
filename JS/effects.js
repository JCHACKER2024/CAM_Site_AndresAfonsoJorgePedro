// ============================================================
// effects.js
// Efeitos visuais globais independentes de página:
// 1. Cursor personalizado (só em desktop com rato)
// 2. Partículas animadas via biblioteca particles.js
//    (carregada via CDN no HTML — cdn.jsdelivr.net/particles.js)
// ============================================================

// --------------------------------------------------------
// 1. CURSOR PERSONALIZADO
// Substitui o cursor padrão por um círculo rosa
// Só ativo em dispositivos com rato (não touch)
// Estilo definido em index.css — #custom-cursor
// --------------------------------------------------------
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
    // Cria o elemento do cursor se não existir
    if (!document.getElementById('custom-cursor')) {
        const cursorDiv = document.createElement('div');
        cursorDiv.id = 'custom-cursor';
        document.body.appendChild(cursorDiv);
    }

    const cursor = document.getElementById('custom-cursor');
    let mouseX = 0;
    let mouseY = 0;

    // Segue o rato com requestAnimationFrame para melhor performance
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        requestAnimationFrame(() => {
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });
    });

    // Elementos interativos que fazem o cursor crescer e ficar mais opaco
    const targetSelectors = 'a, button, details summary, .lang-btn, .btn-cta, .btn-candidata, video, .saida-row, .parceiro-link';

    // Hover em elemento interativo: cursor cresce (scale 2.5) e fica rosa mais opaco
    window.addEventListener('mouseover', (e) => {
        if (e.target.closest(targetSelectors)) {
            cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
            cursor.style.backgroundColor = 'rgba(255, 0, 255, 0.5)';
            cursor.style.borderColor = '#ffffff';
        }
    });

    // Sai do elemento interativo: cursor volta ao normal
    window.addEventListener('mouseout', (e) => {
        if (e.target.closest(targetSelectors)) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'rgba(255, 0, 255, 0.1)';
            cursor.style.borderColor = '#FF00FF';
        }
    });

    // Cursor desaparece quando o rato sai da janela
    document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
}

// --------------------------------------------------------
// 2. PARTÍCULAS (particles.js)
// Cria partículas circulares rosas animadas no fundo
// Requer a biblioteca particles.js carregada no HTML via CDN
// Para alterar número de partículas: muda "value": 80
// Para alterar cor: muda "color": { "value": "#FF00FF" }
// Para alterar velocidade: muda "speed": 0.8
// --------------------------------------------------------
if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80, // Número de partículas
                "density": { "enable": true, "value_area": 800 }
            },
            "color": { "value": "#FF00FF" }, // Cor das partículas
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 2 },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff", // Cor das linhas entre partículas
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.8 // Velocidade de movimento
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": { "enable": true, "mode": "grab" }, // Rato atrai partículas
                "onclick": { "enable": true, "mode": "push" }  // Clique adiciona partículas
            }
        }
    });
}