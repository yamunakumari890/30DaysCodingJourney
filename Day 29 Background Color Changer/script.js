const changeColorBtn = document.getElementById("changeColorBtn");
const colorCode = document.getElementById("colorCode");



function generateColor() {

  const characters = "0123456789ABCDEF";

  let color = "#";

  for (let i=0; i<6; i++){

    const randomIndex = Math.floor(Math.random() * 16);

    color += characters[randomIndex];

  }

  return color;
}

changeColorBtn.addEventListener("click", function(){
  
  const newColor = generateColor();

  document.body.style.backgroundColor = newColor;

  colorCode.innerHTML = newColor;
});