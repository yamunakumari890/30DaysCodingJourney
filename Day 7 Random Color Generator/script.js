let colors = ["red", "green", "blue", "yellow", "purple", "orange", "brown", "skyblue"];

function changeColor() {

    const randomIndex = Math.floor(Math.random() * colors.length);

    const selectedColor = colors[randomIndex];

    document.body.style.backgroundColor = selectedColor;

    document.getElementById("colorName").innerHTML =
    "Current Color : " + selectedColor;

}