const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if(email === "admin@gmail.com" || password === "admin123"){

        message.innerHTML = "✅ Welcome Admin 👋.";
        message.style.color = "red";

    }

    else if(password.length < 6){

        message.innerHTML = "❌ Password must be at least 6 characters long.";
        message.style.color = "red";

    }

    else if(!email.includes("@")){

        message.innerHTML = "❌ Please enter a valid email address.";
        message.style.color = "red";

    }

    else if(email === "admin@gmail.com" && password === "admin123"){

      let name = "Yamuna";

        message.innerHTML = '✅ Welcome, ${name}!';
        message.style.color = "green";

    }

    else {

        message.innerHTML = "❌ Invalid email or password.";
        message.style.color = "red";

    }

});