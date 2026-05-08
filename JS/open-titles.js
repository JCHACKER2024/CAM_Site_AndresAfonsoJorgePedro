// INTERATIVIDADE E ANIMAÇÕES - CAM SOBRE
document.addEventListener('DOMContentLoaded', () => {

    // 1. ANIMAÇÕES DE REVEAL (Scroll)
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-init');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona os elementos para animar ao fazer scroll
    const elementsToReveal = document.querySelectorAll('.card, .saida-row, .parceiro-link, .titulo-seccao, .titulo-medio, .container-pequeno');
    
    elementsToReveal.forEach(el => {
        observer.observe(el);
    });

    // 2. LÓGICA DAS SAÍDAS PROFISSIONAIS (Acordeão)
    const saidaRows = document.querySelectorAll('.saida-row');
    saidaRows.forEach(row => {
        row.addEventListener('click', () => {
            // Fecha as outras linhas ao abrir uma nova
            saidaRows.forEach(otherRow => {
                if (otherRow !== row) otherRow.classList.remove('active');
            });
            // Alterna a classe active na linha clicada
            row.classList.toggle('active');
        });
    });

    // 3. PLAY DO VÍDEO HERO
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        heroVideo.play().catch(() => {});
    }
});

/**
 * 4. LÓGICA DOS CARROSSEIS (Destaques)
 * Esta função precisa de estar fora do DOMContentLoaded para ser acessível 
 * pelos botões onclick="moveSobreSlide(...)" do HTML.
 */
function moveSobreSlide(id, step) {
    const container = document.getElementById(id);
    if (!container) return;

    const slides = container.querySelectorAll('.c-img');
    if (slides.length === 0) return;

    // Encontra o slide que tem a classe 'active'
    let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
    
    // Se não encontrar nenhum active (segurança), começa no primeiro
    if (activeIndex === -1) activeIndex = 0;

    // Remove classe ativa do atual
    slides[activeIndex].classList.remove('active');

    // Calcula o próximo índice (com suporte a loop infinito)
    activeIndex = (activeIndex + step + slides.length) % slides.length;

    // Adiciona classe ativa ao novo slide
    slides[activeIndex].classList.add('active');
}