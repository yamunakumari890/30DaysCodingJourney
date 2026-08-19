const billAmount = document.getElementById("billAmount");
const tipPercentage = document.getElementById("tipPercentage");
const calculateBtn = document.getElementById("calculateBtn");
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");

calculateBtn.addEventListener("click", function () {
  const bill = parseFloat(billAmount.value);

  let tipPercent = parseFloat(tipPercentage.value);
  if (isNaN(tipPercent)) {
    tipPercent = 0; 
  }


  if ( isNaN(bill)  || bill <= 0 ||
        tipPercent < 0) {

   tipAmount.innerText = "0";

   totalAmount.innerText = "0";
    
   alert("Please enter valid values!");
        return;
    }

  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;

  tipAmount.innerText = tip.toFixed(2);
  
  totalAmount.innerText = total.toFixed(2);

});

