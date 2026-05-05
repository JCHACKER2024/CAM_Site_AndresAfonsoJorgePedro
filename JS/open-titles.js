document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => {
        // Opcional: Fecha outros cards abertos
        // document.querySelectorAll('.clickable-card').forEach(c => { if(c !== card) c.classList.remove('active'); });
        
        card.classList.toggle('active');
    });
});