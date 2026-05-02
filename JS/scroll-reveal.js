document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que devem ser revelados
    const elementsToReveal = document.querySelectorAll('.reveal, .reveal-right');
    
    elementsToReveal.forEach(el => {
        observer.observe(el);
    });
});