document.getElementById("Password").addEventListener("input", function() {
  const password = document.getElementById("Password").value;
  const message = document.getElementById("message");

  if(password.length < 6) {
    message.innerHTML = " 🔴 Weak Password 6 characters long.";
    message.style.color = "red";
  } 
  else if(password.length < 11) {
    message.innerHTML = " 🟡 medium Password.";
    message.style.color = "yellow";
  }
  else {
    message.innerHTML = " 🟢 Strong Password.";
    message.style.color = "green";
  }
});