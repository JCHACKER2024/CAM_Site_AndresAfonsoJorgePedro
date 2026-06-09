// ============================================================
// open-titles.js
// Toda a interatividade das páginas do CAM:
// 1. Animações de entrada (reveal on scroll)
// 2. Saídas profissionais (tabela expansível)
// 3. Slider de vídeos (Hall of Fame)
// 4. Modal de graduados (Hall of Fame)
// 5. Carrossel de imagens (página Sobre)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------
    // 1. ANIMAÇÕES DE ENTRADA (REVEAL ON SCROLL)
    // Elementos com class="reveal" animam ao entrar no ecrã
    // A animação CSS é definida em cada ficheiro CSS — .reveal.active
    // Para aplicar a um elemento: adiciona class="reveal" no HTML
    // --------------------------------------------------------
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-init');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Lista de elementos que animam ao entrar no ecrã
    const elementsToReveal = document.querySelectorAll('.card, .saida-row, .parceiro-link, .titulo-seccao, .titulo-medio, .project-card, .testimonial-card, .ato-wrapper, .video-slide');
    elementsToReveal.forEach(el => observer.observe(el));

    // --------------------------------------------------------
    // 2. SAÍDAS PROFISSIONAIS (TABELA EXPANSÍVEL)
    // Cada .saida-row abre/fecha ao clicar
    // Só uma linha pode estar aberta de cada vez
    // --------------------------------------------------------
    const saidaRows = document.querySelectorAll('.saida-row');
    saidaRows.forEach(row => {
        row.addEventListener('click', () => {
            // Fecha todas as outras linhas
            saidaRows.forEach(otherRow => {
                if (otherRow !== row) otherRow.classList.remove('active');
            });
            // Abre/fecha a linha clicada
            row.classList.toggle('active');
        });
    });

    // Autoplay do vídeo hero em páginas que o usem
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) heroVideo.play().catch(() => {});

    // Fecha o modal ao clicar fora do conteúdo
    const modal = document.getElementById('alumniModal');
    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target === modal) closeAlumniModal();
        });
    }
});

// ============================================================
// FUNÇÕES GLOBAIS (chamadas diretamente no HTML via onclick)
// ============================================================

// --------------------------------------------------------
// 3. SLIDER DE VÍDEOS (HALL OF FAME)
// Chamado no HTML: onclick="changeVideoSlide(-1 ou 1)"
// Reset do iframe ao mudar de slide para parar o áudio
// --------------------------------------------------------
let currentVideoSlide = 0;

function changeVideoSlide(direction) {
    const slides = document.querySelectorAll('.video-slide');
    if (slides.length === 0) return;

    // Reset do iframe para parar o vídeo/som anterior
    const currentIframe = slides[currentVideoSlide].querySelector('iframe');
    if (currentIframe) {
        const src = currentIframe.getAttribute('src');
        currentIframe.setAttribute('src', '');
        currentIframe.setAttribute('src', src);
    }

    slides[currentVideoSlide].classList.remove('active');
    currentVideoSlide = (currentVideoSlide + direction + slides.length) % slides.length;
    slides[currentVideoSlide].classList.add('active');
}

// --------------------------------------------------------
// 4. MODAL DE GRADUADOS (HALL OF FAME)
// Abre popup com foto, nome, cargo e depoimento completo
// Chamado no HTML: onclick="openAlumniModal('id_do_graduado')"
// O texto completo está em <div id="text-ID" class="hidden-text">
// Para adicionar graduado: copia um .testimonial-card no hof.html
// --------------------------------------------------------
function openAlumniModal(id) {
    const modal = document.getElementById('alumniModal');
    const modalBody = document.getElementById('modal-body-v2');
    if (!modal || !modalBody) return;

    const card = document.querySelector(`[onclick="openAlumniModal('${id}')"]`);
    if (!card) return;

    // Lê os dados do card clicado
    const nome = card.querySelector('h3').innerText;
    const cargo = card.querySelector('.cargo').innerText;
    const fotoHTML = card.querySelector('.alumni-photo').innerHTML;

    const hiddenTextEl = document.getElementById(`text-${id}`);
    if (!hiddenTextEl) return;
    const textoCompleto = hiddenTextEl.innerHTML;

    // Constrói o conteúdo do modal com os dados do card
    modalBody.innerHTML = `
        <div class="modal-header-alumni" style="text-align: center; margin-bottom: 25px;">
            <div class="alumni-photo" style="margin: 0 auto 15px auto; width: 130px; height: 130px;">
                ${fotoHTML}
            </div>
            <h3 style="color: #fff; font-size: 26px; margin-bottom: 5px;">${nome}</h3>
            <span class="cargo" style="color: #FF00FF; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">
                ${cargo}
            </span>
        </div>
        <div class="modal-text-alumni" style="text-align: justify;">
            ${textoCompleto}
        </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Bloqueia scroll da página
}

function closeAlumniModal() {
    const modal = document.getElementById('alumniModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restaura scroll da página
    }
}

// --------------------------------------------------------
// 5. CARROSSEL DE IMAGENS (PÁGINA SOBRE)
// Setas prev/next dentro dos cards de imagens
// Chamado no HTML: onclick="moveSobreSlide('carousel-id', 1)"
// moveSlide é a função base, moveSobreSlide é um wrapper para .c-img
// --------------------------------------------------------
function moveSlide(id, step, imgClass = '.c-img') {
    const container = document.getElementById(id);
    if (!container) return;

    // Tenta encontrar imagens pela classe fornecida, ou por .carousel-img como fallback
    let slides = container.querySelectorAll(imgClass);
    if (slides.length === 0) slides = container.querySelectorAll('.carousel-img');
    if (slides.length === 0) return;

    let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
    if (activeIndex === -1) activeIndex = 0;

    slides[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + step + slides.length) % slides.length;
    slides[activeIndex].classList.add('active');
}

// Wrapper específico para o carrossel da página Sobre
function moveSobreSlide(id, step) {
    moveSlide(id, step, '.c-img');
}