const quoteBox = document.getElementById("quoteBox");
const heart = document.querySelector(".heart");

const audioFiles = [
    "audio1.mp3",
    "audio2.mp3",
    "audio3.mp3",
    "audio4.mp3",
    "audio5.mp3",
    "audio6.mp3",
    "audio7.mp3",
    "audio8.mp3",
    "audio9.mp3",
    "audio10.mp3",
    "audio11.mp3",
    "audio12.mp3",
    "audio13.mp3",
    "audio14.mp3",
    "audio15.mp3",
    "audio16.mp3",
    "audio17.mp3",
    "audio18.mp3",
    "audio19.mp3",
    "audio20.mp3",
    "audio21.mp3",
    "audio22.mp3",
    "audio23.mp3",
    "audio24.mp3",
    "audio25.mp3",
    "audio26.mp3",

    
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
