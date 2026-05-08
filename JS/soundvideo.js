// APENAS CONTROLO DE SOM (VÍDEO FIXO NO HTML)
document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('myVideo');
    const muteBtn = document.getElementById('muteBtn');
    const statusSom = document.getElementById('statusSom');

    if (muteBtn && videoElement) {
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