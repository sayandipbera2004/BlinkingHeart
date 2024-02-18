const quoteBox = document.getElementById("quoteBox");
const heart = document.querySelector(".heart");

const audioFiles = [
    "audio1.mp3",
    "audio2.mp3",
    "audio3.mp3",
    "audio4.mp3",
    "audio5.mp3",
    "audio6.mp3",

    // Add more audio files as needed
];

let currentAudioIndex = 0;
let backgroundMusic = new Audio();

function playNextAudio() {
    currentAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
    backgroundMusic.src = audioFiles[currentAudioIndex];
    backgroundMusic.play();
}

async function fetchRandomQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random?tags=love");
        const data = await response.json();
        return {
            quote: data.content,
            font: getRandomFont(),
        };
    } catch (error) {
        console.error("Error fetching quote:", error);
        return {
            quote: "Love is in the air!",
            font: getRandomFont(),
        };
    }
}

function getRandomFont() {
    const fonts = [
        "Arial, sans-serif",
        "Times New Roman, serif",
        "Courier New, Courier, monospace",
        "Georgia, serif",
        "Comic Sans MS, cursive",
        // Add more fonts as needed
    ];
    return fonts[Math.floor(Math.random() * fonts.length)];
}

async function updateQuote() {
    const { quote, font } = await fetchRandomQuote();
    quoteBox.innerText = quote;
    quoteBox.style.fontFamily = font;
}

heart.addEventListener("animationiteration", () => {
    heart.classList.remove("animateHeart");
    void heart.offsetWidth;
    heart.classList.add("animateHeart");
});

setInterval(() => {
    heart.classList.toggle("blinkHeart");
}, 1000);

updateQuote();
playNextAudio();

setInterval(() => {
    updateQuote();
    playNextAudio();
}, 10000);
