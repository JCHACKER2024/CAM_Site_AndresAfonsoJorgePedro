document.addEventListener('DOMContentLoaded', () => {

    /* --- ANIMAÇÕES DE REVEAL (SCROLL) --- */
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

    const elementsToReveal = document.querySelectorAll('.card, .saida-row, .parceiro-link, .titulo-seccao, .titulo-medio, .project-card, .testimonial-card, .ato-wrapper');
    
    elementsToReveal.forEach(el => {
        observer.observe(el);
    });

    /* --- ACORDEÃO (SAÍDAS E SYLLABUS) --- */
    const saidaRows = document.querySelectorAll('.saida-row');
    saidaRows.forEach(row => {
        row.addEventListener('click', () => {
            saidaRows.forEach(otherRow => {
                if (otherRow !== row) otherRow.classList.remove('active');
            });
            row.classList.toggle('active');
        });
    });

    /* --- PLAY DO VÍDEO HERO --- */
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        heroVideo.play().catch(() => {});
    }
});

/* --- LÓGICA UNIVERSAL DE CARROSSEIS --- */
function moveSlide(id, step, imgClass = '.c-img') {
    const container = document.getElementById(id);
    if (!container) return;

    let slides = container.querySelectorAll(imgClass);
    if (slides.length === 0) {
        slides = container.querySelectorAll('.carousel-img');
    }
    
    if (slides.length === 0) return;

    let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
    
    if (activeIndex === -1) activeIndex = 0;

    slides[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + step + slides.length) % slides.length;
    slides[activeIndex].classList.add('active');
}

/* --- COMPATIBILIDADE PÁGINA SOBRE --- */
function moveSobreSlide(id, step) {
    moveSlide(id, step, '.c-img');
}