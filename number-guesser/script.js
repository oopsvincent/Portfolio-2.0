const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * max + 1);

let isRunning = true;
let attempts = 0;

window.alert(`Guess a number between ${min} and ${max}`);

while (isRunning) {
    let answer = window.prompt(`Guess the Number`);
    answer = Number(answer);
    console.log(answer);

    if (answer == NaN) {
        window.alert("Enter a Valid Number");
    } else if(answer < min || answer > max) {
        window.alert("Enter a Valid Number");
    } else{
     if (answer === randomNumber) {
        window.alert(`You Guessed it.  Yay!! :) The correct Number was ${randomNumber}. It took you ${attempts} attempts.`);
        isRunning = false;

    } else {
            if (answer < randomNumber) {
                window.alert("Too Low :( TRY AGAIN!");
                attempts++;
            }
            else if (answer > randomNumber){
                attempts++;
                window.alert("Too High :( TRY AGAIN!");
            }
        }
    }
        
}

console.log(randomNumber);
