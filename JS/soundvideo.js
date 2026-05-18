// CONTROLO DE SOM E ESTADO DO VÍDEO PRINCIPAL
document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('myVideo');
    const muteBtn = document.getElementById('muteBtn');
    const statusSom = document.getElementById('statusSom');

    if (videoElement && muteBtn && statusSom) {
        
        statusSom.innerText = videoElement.muted ? "OFF" : "ON";
        if (!videoElement.muted) {
            muteBtn.classList.add('active');
        }

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