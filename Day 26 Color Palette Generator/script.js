const colorContainer = document.getElementById("colorContainer");
const  generateBtn = document.getElementById("generateBtn");

const character = "0123456789ABCDEF";

function generateColor() {
  let color = "#";

for (let i=0; i<6; i++){

  let randomIndex = Math.floor(Math.random() * character.length);
  color += character[randomIndex];
}
return color;

}

function createColorCard() {
  const color = generateColor();
  const card = document.createElement("div");
  card.classList.add("color-card");
  card.style.backgroundColor = color;

  const colorCode = document.createElement("span");
  colorCode.classList.add("color-code");
  colorCode.innerText = color;

  card.appendChild(colorCode);
  colorContainer.appendChild(card);
}

for (let i=0; i<5; i++) {
  createColorCard();
}

generateBtn.addEventListener("click", function() {
  colorContainer.innerHTML = "";
});

for (let i=0; i<5; i++){
  createColorCard();
}

generateBtn.addEventListener("click", function() {
  colorContainer.innerHTML = "";
  for (let i=0; i<5; i++) {
    createColorCard();
  }
});