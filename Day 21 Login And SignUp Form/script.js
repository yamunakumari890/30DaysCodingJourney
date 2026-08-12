alert("javascript connected");
const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
event.preventDefault();

let emailValue = email.value.trim();
let passwordValue = password.value.trim();

if(emailValue === "" || passwordValue === ""){
  message.innerText = "Please fill all fields ❌";
  return;
}

if(!emailValue.includes("@")) {
    message.innerText = "Please enter a valid email ❌";
        return;
}

if(passwordValue.length < 6){
  message.innerText = 
  "Password must be at least 6 characters ❌"
  return;
}

if(
  emailValue === "test@gmail.com" &&
  passwordValue === "123456"
) {
  message.innerText = "Login Successful! 🎉";

} else {
  message.innerText = "Invalid email or password ❌";
}
});