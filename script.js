


const quoteBox = document.getElementById("quoteBox");
const prevQuoteButton = document.getElementById("prevQuote");
const nextQuoteButton = document.getElementById("nextQuote");

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
    "audio26.mp3",/* add the rest */
];

const quotes = [
    "Love is not about how many days, months, or years you’ve been together. Love is about how much you love each other every single day.",
    "You are the source of my joy, the center of my world, and the whole of my heart.",
    "Every time I see you, I fall in love all over again.",
    "The best thing to hold onto in life is each other.",
    "You are my paradise and I would happily get lost in you forever.",
    "I look at you and see the rest of my life in front of my eyes.",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    "I love you not only for what you are but for what I am when I am with you.",
    "You make me complete. I love you so much, I didn’t know what love meant until I met you.",
    "I could start a fire with what I feel for you.",
    "When I follow my heart, it leads me to you.",
    "I still fall in love with you every day!"
];

let currentAudioIndex = 0;
let currentQuoteIndex = 0;
let backgroundMusic = new Audio();

function playAudio(index) {
    backgroundMusic.src = audioFiles[index];
    backgroundMusic.play();
}

function changeQuote(index) {
    quoteBox.innerText = quotes[index];
}

function getRandomFont() {
    const fonts = [
        "Arial, sans-serif", "Times New Roman, serif",
        "Courier New, monospace", "Georgia, serif",
        "Comic Sans MS, cursive"
    ];
    return fonts[Math.floor(Math.random() * fonts.length)];
}

function changeContent(direction) {
    if (direction === 'next') {
        currentAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    } else {
        currentAudioIndex = (currentAudioIndex - 1 + audioFiles.length) % audioFiles.length;
        currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    }

    playAudio(currentAudioIndex);
    changeQuote(currentQuoteIndex);
    quoteBox.style.fontFamily = getRandomFont();
}
function createFallingHeart() {
    const heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.style.setProperty("--random-position", Math.random());
    document.body.appendChild(heart);

    // Remove heart from DOM after animation ends
    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

// Generate falling hearts at random intervals
setInterval(createFallingHeart, 1000); // Adjust timing for more or fewer hearts
prevQuoteButton.addEventListener('click', () => changeContent('prev'));
nextQuoteButton.addEventListener('click', () => changeContent('next'));

// Initialize the first quote and audio
changeContent('next');
