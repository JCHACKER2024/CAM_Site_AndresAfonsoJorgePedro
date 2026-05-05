const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Seleciona todos os elementos que têm as classes de animação
document.querySelectorAll('.reveal, .reveal-right').forEach((el) => {
    observer.observe(el);
});