document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('myVideo');
    const muteBtn = document.getElementById('muteBtn');
    const statusSom = document.getElementById('statusSom');
    const totalVideos = 6;

    // --- LÓGICA DO VÍDEO ALEATÓRIO ---
    const randomIndex = Math.floor(Math.random() * totalVideos) + 1;
    const videoPath = `VIDS/video${randomIndex}.mp4`;

    const source = document.createElement('source');
    source.src = videoPath;
    source.type = 'video/mp4';

    videoElement.appendChild(source);
    videoElement.load();

    // --- LÓGICA DO BOTÃO DE SOM ---
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
});