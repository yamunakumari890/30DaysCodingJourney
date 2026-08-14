
const sentence = document.getElementById("sentence");
const input = document.getElementById("input");
const time = document.getElementById("time");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");

let timer = null;
let timeLeft = 30;
let startTime = 0;

startBtn.addEventListener("click", startTest);

function startTest() {

    clearInterval(timer);

    timeLeft = 30;
    time.innerText = "30";

    input.value = "";

    wpm.innerText = "0";
    accuracy.innerText = "0";

    input.disabled = false;

    input.focus();

    startTime = Date.now();

    startBtn.disabled = true;

    timer = setInterval(function () {

        timeLeft--;

        time.innerText = timeLeft;

        if (timeLeft === 0) {

            clearInterval(timer);

            timer = null;

            endTest();
        }

    }, 1000);
}


input.addEventListener("input", function () {
    calculateResult();

});


function calculateResult() {

    let typedText = input.value;

    let originalText = sentence.innerText;

    let correctCharacters = 0;

    for (let i = 0; i < typedText.length; i++) {

        if (typedText[i] === originalText[i]) {

            correctCharacters++;

        }

    }


    if (typedText.length > 0) {

        let accuracyValue =
            (correctCharacters / typedText.length) * 100;

        accuracy.innerText =
            Math.round(accuracyValue);

    } else {

        accuracy.innerText = "0";

    }


    let words = 0;


    if (typedText.trim() !== "") {

    words = typedText.trim().split(/\s+/).length;

    }

    let elapsedMinutes = (Date.now() - startTime) / 60000;

    if (elapsedMinutes > 0 && words > 0) {

    let wpmValue = Math.round(words / elapsedMinutes);

        wpm.innerText = wpmValue;

    } else {

     wpm.innerText = "0";

    }

}

function endTest() {

    input.disabled = true;

    startBtn.disabled = false;

    calculateResult();

    alert(
        "🎉 Congratulations!\n\n" +
        "⚡ WPM: " + wpm.innerText + "\n" +
        "🎯 Accuracy: " + accuracy.innerText + "%"
    );

}


restartBtn.addEventListener("click", restartTest);


function restartTest() {

    clearInterval(timer);

    timer = null;

    timeLeft = 30;

    time.innerText = "30";

    input.value = "";

    input.disabled = true;

    wpm.innerText = "0";

    accuracy.innerText = "0";

    startBtn.disabled = false;

}