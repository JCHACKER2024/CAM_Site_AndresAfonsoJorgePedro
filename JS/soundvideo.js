// ============================================================
// soundvideo.js
// Controla o botão SOM: ON/OFF do vídeo principal
// Afeta: todas as páginas que têm #myVideo e #muteBtn
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('myVideo');
    const muteBtn = document.getElementById('muteBtn');
    const statusSom = document.getElementById('statusSom');

    if (videoElement && muteBtn && statusSom) {

        // Define o estado inicial do botão conforme o estado do vídeo
        statusSom.innerText = videoElement.muted ? "OFF" : "ON";
        if (!videoElement.muted) {
            muteBtn.classList.add('active');
        }

        // Alterna entre mudo e com som ao clicar
        muteBtn.addEventListener('click', () => {
            if (videoElement.muted) {
                videoElement.muted = false;
                statusSom.innerText = "ON";
                muteBtn.classList.add('active');
            } else {
                videoElement.muted = true;
                statusSom.innerText = "OFF";
                muteBtn.classList.remove('active');
            }
        });
    }
});