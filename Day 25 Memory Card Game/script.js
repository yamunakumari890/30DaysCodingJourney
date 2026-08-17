const emojis = [
    "🐱", "🐱",
    "🐶", "🐶",
    "🦊", "🦊",
    "🐼", "🐼",
    "🐸", "🐸",
    "🐵", "🐵",
    "🦁", "🦁",
    "🐯", "🐯"
];

const gameBoard = document.getElementById("gameBoard");
const movesDisplay = document.getElementById("moves");
const matchesDisplay = document.getElementById("matches");
const restartBtn = document.getElementById("restartBtn");

let cards = [];
let flippedCards = [];
let moves = 0;
let matches = 0;
let lockBoard = false;

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function startGame () {
  gameBoard.innerHTML = "";
  cards = [...emojis];
  shuffle(cards);
  moves = 0;
  matches = 0;
  flippedCards = [];
  lockBoard = false;
  movesDisplay.innerText = moves;
  matchesDisplay.innerText = matches;

cards.forEach(function (emoji, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.index = index;
  card.innerText = "❓";
  card.addEventListener("click", function() {
    flipCard(card, emoji);
  });

  gameBoard.appendChild(card);
});

}

function flipCard(card, emoji) {
  if(lockBoard){
    return;
  }

  if(flippedCards.includes(card)){
    return;
  }

      if(card.classList.contains("matches")){
        return;
      }

      card.innerText = emoji;

      flippedCards.push(card);

    if(flippedCards.length === 2) {
      moves++;
      movesDisplay.innerText =  moves;
      checkMatch();
    }
  }

function checkMatch() {
   const firstCard = flippedCards[0];
    const secondCard = flippedCards[1];

    const firstEmoji = firstCard.innerText;
    const secondEmoji = secondCard.innerText;

    if (firstEmoji === secondEmoji) {

        matches++;

        matchesDisplay.innerText = matches;

        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        flippedCards = [];

        if (matches === emojis.length / 2) {

            setTimeout(function () {

                alert("🎉 Congratulations! You completed the game!");

            }, 500);

        }

      }
         else {

        lockBoard = true;

        setTimeout(function () {

            firstCard.innerText = "❓";
            secondCard.innerText = "❓";

            flippedCards = [];

            lockBoard = false;

        }, 800);

    }
  }

  restartBtn.addEventListener(
    "click", 
    startGame
);

startGame();