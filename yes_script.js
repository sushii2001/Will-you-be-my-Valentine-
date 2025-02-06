window.onload = function() {
    const audio = document.getElementById('bgMusic');
    audio.play().catch(e => console.log("Audio autoplay failed:", e));
};