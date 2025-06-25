const QUOTES = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing is a fundamental skill in the digital age.",
  "Practice makes a person perfect.",
  "Fast and accurate typing leads to efficiency.",
  "Focus on accuracy before speed."
];

let quote = "";
let timer;
let startTime;

function startTest() {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  quote = QUOTES[randomIndex];
  document.getElementById("quoteDisplay").innerText = quote;
  document.getElementById("quoteInput").value = "";
  document.getElementById("accuracy").innerText = "Accuracy: 100%";
  document.getElementById("speed").innerText = "Speed: 0 WPM";
  document.getElementById("timer").innerText = "Time: 0s";

  startTime = new Date();
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const currentTime = new Date();
  const seconds = Math.floor((currentTime - startTime) / 1000);
  document.getElementById("timer").innerText = `Time: ${seconds}s`;

  const input = document.getElementById("quoteInput").value;
  const correct = quote.substring(0, input.length);
  
  let accuracy = 100;
  if (input.length > 0) {
    let correctChars = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === quote[i]) {
        correctChars++;
      }
    }
    accuracy = Math.round((correctChars / input.length) * 100);
  }

  const wordsTyped = input.trim().split(/\s+/).length;
  const speed = Math.round((wordsTyped / (seconds / 60)) || 0);

  document.getElementById("accuracy").innerText = `Accuracy: ${accuracy}%`;
  document.getElementById("speed").innerText = `Speed: ${speed} WPM`;
}

function resetTest() {
  clearInterval(timer);
  document.getElementById("quoteDisplay").innerText = "";
  document.getElementById("quoteInput").value = "";
  document.getElementById("accuracy").innerText = "Accuracy: 100%";
  document.getElementById("speed").innerText = "Speed: 0 WPM";
  document.getElementById("timer").innerText = "Time: 0s";
}
