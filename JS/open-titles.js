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

    /* --- FECHAR MODAL AO CLICAR FORA --- */
    const modal = document.getElementById('alumniModal');
    window.onclick = function(event) {
        if (event.target == modal) {
            closeAlumniModal();
        }
    };
});

/* --- LÓGICA DO MODAL --- */
function openAlumniModal(id) {
    const modal = document.getElementById('alumniModal');
    const modalBody = document.getElementById('modal-body-v2');
    
    const card = document.querySelector(`[onclick="openAlumniModal('${id}')"]`);
    if (!card) return;

    const nome = card.querySelector('h3').innerText;
    const cargo = card.querySelector('.cargo').innerText;
    const fotoHTML = card.querySelector('.alumni-photo').innerHTML;
    const textoCompleto = document.getElementById(`text-${id}`).innerHTML;

    modalBody.innerHTML = `
        <div class="modal-header-alumni" style="text-align: center; margin-bottom: 25px;">
            <div class="alumni-photo" style="margin: 0 auto 15px auto; width: 130px; height: 130px;">
                ${fotoHTML}
            </div>
            <h3 style="color: #fff; font-size: 26px; margin-bottom: 5px;">${nome}</h3>
            <span class="cargo" style="color: #ffee00; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">
                ${cargo}
            </span>
        </div>
        <div class="modal-text-alumni">
            <p>${textoCompleto}</p>
        </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeAlumniModal() {
    const modal = document.getElementById('alumniModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
}

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

function moveSobreSlide(id, step) {
    moveSlide(id, step, '.c-img');
}