const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById('attempts');
const restartBtn = document.getElementById("restartBtn");

let secretNumber;
let attempts;

function startGame() {

  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = "";
  message.innerText = "Good luck! Make your guess...";
  attemptsText.innerText = "Attempts: 0";
  guessInput.disabled = false;
  checkBtn.disabled = false;
}

checkBtn.addEventListener("click", function () {
  const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {

    message.innerText = "⚠️ Please enter a number between 1 and 100.";
      return;
    }

  attempts++; 
  attemptsText.innerText = `Attempts: ${attempts}`;
     if (guess < secretNumber) {
        message.innerText = "⬆️ Too Low! Try again.";

    }
  
    else if (guess > secretNumber) {
     message.innerText = "⬇️ Too High! Try again.";
   }

    else {

     message.innerText =  `🎉 Correct! The number was ${secretNumber}!`;
         guessInput.disabled = true;

         checkBtn.disabled = true;
    }

});

restartBtn.addEventListener("click", function () { 
    startGame();

});

startGame();