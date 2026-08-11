let countdown;

function startCountdown() {

  let dateInput = document.getElementById("dateInput").value;

  if(dateInput === "") {
    alert("please select a date and time");
    return;
  }
  
  let targetDate = new Date(dateInput).getTime();

  clearInterval(countdown);

  countdown = setInterval(function(){
  let now = new Date().getTime();

  let distance = targetDate - now;
  if(distance <= 0 ){

    clearInterval(countdown);

            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";

            alert("🎉 Countdown Completed!");

            return;
        }

  let days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  let hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  let minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  let seconds = Math.floor(
    (distance % (1000 * 60 ))
    / 1000
  );

  document.getElementById("days").innerText =
            String(days).padStart(2, "0");

        document.getElementById("hours").innerText =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").innerText =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").innerText =
            String(seconds).padStart(2, "0");

    }, 1000);
}