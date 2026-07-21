function add() {

  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  document.getElementById("result").innerHTML = 
  "Result : " + (num1 + num2) ;
}

function sub() {

  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  document.getElementById("result").innerHTML =
  "Result : " + (num1 - num2) ;
}

function mul() {

  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  document.getElementById("result").innerHTML =
  "Result : " + (num1 * num2) ;
}

function divi() {

  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  document.getElementById("result").innerHTML =
  "Result : " + (num1 / num2) ;
}

