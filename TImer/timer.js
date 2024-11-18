const button = document.getElementById("btn");
const reset = document.getElementById("r-btn")
const hrs = document.getElementById("hr");
const min = document.getElementById("mn");
const sec = document.getElementById("sc");
const ms = document.getElementById("mili");

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let isRunning = false;

button.addEventListener("click", () => {
    if (!isRunning) {
        timer = setInterval(() => {

            miliseconds++;
            ms.innerText = "0" + miliseconds;
            if (miliseconds > 9) {
                ms.innerText = miliseconds
            }   if (miliseconds > 99){
                seconds++;
                miliseconds = 0;
                sec.innerText = "0" + seconds;
                if (seconds > 9) {
                    sec.innerText = seconds;
                }
            }
            // seconds++;
            // sec.innerText = "0" + seconds;
            // if (seconds > 9) {
            //     sec.innerText = seconds
            // }
            if (seconds > 59){
                minutes++;
                seconds = 0;
                min.innerText = "0" + minutes;
                if (minutes > 9) {
                    min.innerText = minutes;
                }
            }
            if (minutes > 59) {
                hours++;
                minutes = 0;
                hrs.innerText = "0" + hours;
                if (hours > 9) {
                    hrs.innerText = hours;
                }
            }
        }, 10);
        timer
        button.innerText = "STOP"
        isRunning = true;
    }
    else{
        clearInterval(timer)
        button.innerText = "START"
        isRunning = false;
    }
});

reset.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/TImer/timer.html";
});