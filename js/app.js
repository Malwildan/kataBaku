const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const correctStat = document.querySelector('.correct-count');
const wrongStat = document.querySelector('.wrong-count');
const answerText = document.querySelector('.answer-text');
const soundButton = document.querySelector(".btn-sound");

let baku = [];
let tidakBaku = [];
let shuffledIndices = [];
let currentIdx = 0;

let correctCount = 0;
let wrongCount = 0;

const correctSound = new Audio("https://acomarcho.github.io/kataBaku/audio/correct.wav");
const wrongSound = new Audio("https://acomarcho.github.io/kataBaku/audio/wrong.mp3");

let sound = true;
soundButton.addEventListener("click", function () {
  const icon = soundButton.querySelector("i");
  icon.classList.toggle("fa-volume-up");
  icon.classList.toggle("fa-volume-mute");
  sound = !sound;
});

async function loadData() {
    try {
        const response = await fetch('./js/daftar_baku_lantip.json');
        if (!response.ok) throw new Error("Failed to load JSON");
        
        const data = await response.json();
        
        // Convert JSON object to arrays
        baku = Object.values(data);   // Correct words
        tidakBaku = Object.keys(data); // Incorrect words
        
        shuffleArray();
        SetUp();
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

function shuffleArray() {
    shuffledIndices = Array.from({ length: baku.length }, (_, i) => i);
    for (let i = shuffledIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
    }
    currentIdx = 0;
}

function SetUp() {
    if (currentIdx >= shuffledIndices.length) {
        shuffleArray();
    }

    let index = shuffledIndices[currentIdx++];
    const correctButton = Math.random() < 0.5 ? btn1 : btn2;

    correctButton.textContent = baku[index];
    (correctButton === btn1 ? btn2 : btn1).textContent = tidakBaku[index];
}

function answer(e) {
    btn1.disabled = true;
    btn2.disabled = true;

    const selectedButton = e.currentTarget;
    const correctAnswer = baku[shuffledIndices[currentIdx - 1]];
    const correctButton = btn1.textContent === correctAnswer ? btn1 : btn2;

    if (selectedButton.textContent === correctAnswer) {
        answerText.textContent = `Jawaban "${selectedButton.textContent}", benar!`;
        answerText.classList.remove('wrong');
        answerText.classList.add('correct');
        correctCount++;
        correctStat.textContent = correctCount;
        selectedButton.classList.add('correct-answer');
        if (sound) correctSound.play();
    } else {
        answerText.textContent = `Yang benar adalah "${correctAnswer}"!`;
        answerText.classList.remove('correct');
        answerText.classList.add('wrong');
        wrongCount++;
        wrongStat.textContent = wrongCount;
        selectedButton.classList.add('wrong-answer');
        correctButton.classList.add('correct-answer');
        if (sound) wrongSound.play();
    }

    setTimeout(() => {
        selectedButton.classList.remove('wrong-answer', 'correct-answer');
        correctButton.classList.remove('correct-answer');
        btn1.disabled = false;
        btn2.disabled = false;
        SetUp();
    }, 500);
}

btn1.addEventListener('click', answer);
btn2.addEventListener('click', answer);

loadData(); // Load JSON and start game
