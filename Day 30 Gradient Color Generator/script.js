const gradientBox = document.getElementById("gradientBox");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const generateBtn = document.getElementById("generateBtn");
const cssCode = document.getElementById("cssCode");
const copyBtn = document.getElementById("copyBtn");

function generateColor(){
  
  let characters = "123456789ABCDEF";

  let color = "#";

  for (let i=0; i<6; i++){

    const randomIndex = Math.floor(Math.random() * characters.length);

    color += characters[randomIndex];

  }

  return color;
}

function generateGradient() {

  const firstColor = generateColor();
  const secondColor = generateColor();

const gradient = `linear-gradient(135deg, ${firstColor}, ${secondColor})`;


 gradientBox.style.background = gradient;


  color1.innerText = firstColor;
  color2.innerText = secondColor;

  cssCode.innerText = `background: ${gradient};`;

}

generateBtn.addEventListener("click", function() {

  generateGradient();
});

copyBtn.addEventListener("click", function() {
  const text = cssCode.innerText;
  navigator.clipboard.writeText(text);
  copyBtn.innerText = "✅ coppied!";

  setTimeout(function() {

    copyBtn.innerText = "✅ Copy CSS";

  }, 1500);
});

generateGradient();
