const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    // Hide the main page content
    document.getElementById('main-page').style.display = 'none';
    // Show the yes page content
    document.getElementById('yes-page').style.display = 'block';
    const audio = new Audio('data/doodle-made-with-Voicemod.mp3');
    audio.play().catch(e => console.log("Audio autoplay failed:", e));
}

function refreshPage() {
    location.reload();
}