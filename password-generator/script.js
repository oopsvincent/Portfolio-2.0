
// // let containsUppercase = false;
// // let containsLowercase = false;
// // let containsNumber = false;
// // let containsSymbol = false;

// // const switch1 = document.getElementById("switch1");
// // const switch2 = document.getElementById("switch2");
// // const switch3 = document.getElementById("switch3");
// // const switch4 = document.getElementById("switch4");

// // document.querySelector(".sections").addEventListener("change", () => {
// //     if (switch1.checked) {
// //         containsUppercase = true;
// //         console.log(containsUppercase);
        
// //     }
// //     else{
// //         containsUppercase = false;
// //         console.log(containsUppercase)
// //     }
// //     if (switch2.checked) {
// //         containsLowercase = true;
// //         console.log(containsLowercase);
        
// //     }
// //     else{
// //         containsLowercase = false;
// //         console.log(containsLowercase)
// //     }
// //     if (switch3.checked) {
// //         containsNumber = true;
// //         console.log(containsNumber);
        
// //     }
// //     else{
// //         containsNumber = false;
// //         console.log(containsNumber)
// //     }
// //     if (switch4.checked) {
// //         containsSymbol = true;
// //         console.log(containsSymbol);
        
// //     }
// //     else{
// //         containsSymbol = false;
// //         console.log(containsSymbol)
// //     }
// // })


// // const result = document.getElementById("result");
// // const inputBox = document.getElementById("inputBox");

// // function generatePassword(value, containsUppercase, containsLowercase, containsNumber, containsSymbol) {
// //     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
// //     const numbersChars = "1234567890"
// //     const symbolsChars = `!@#$%&*'"()_-=)/\+`

// //     let passwordLength = inputBox.value;

// //     let allowedChars = "";
// //     let password = "";
    
// //     allowedChars += containsUppercase ? uppercaseChars : "";
// //     allowedChars += containsLowercase ? lowercaseChars : "";
// //     allowedChars += containsNumber ? numbersChars : "";
// //     allowedChars += containsSymbol ? symbolsChars : ""

// //     for (let i = 0; i > passwordLength.length; i++) {
// //         let randomNumber = Math.floor(Math.random() * value);
// //         password += allowedChars[randomNumber];

// //     }


// //     result.innerHTML = password;
// //     console.log(password);
    
// // }



// let containsUppercase = false;
// let containsLowercase = false;
// let containsNumber = false;
// let containsSymbol = false;

// const switch1 = document.getElementById("switch1");
// const switch2 = document.getElementById("switch2");
// const switch3 = document.getElementById("switch3");
// const switch4 = document.getElementById("switch4");

// document.querySelector(".sections").addEventListener("change", () => {
//     containsUppercase = switch1.checked;
//     containsLowercase = switch2.checked;
//     containsNumber = switch3.checked;
//     containsSymbol = switch4.checked;

//     console.log({
//         containsUppercase,
//         containsLowercase,
//         containsNumber,
//         containsSymbol
//     });
// });

// const result = document.getElementById("result");
// const inputBox = document.getElementById("inputBox");

// function generatePassword() {
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const numbersChars = "1234567890";
//     const symbolsChars = `!@#$%&*'"()_-=)/+`;

//     let passwordLength = parseInt(inputBox.value, 10);
//     let allowedChars = "";
//     let password = "";

//     allowedChars += containsUppercase ? uppercaseChars : "";
//     allowedChars += containsLowercase ? lowercaseChars : "";
//     allowedChars += containsNumber ? numbersChars : "";
//     allowedChars += containsSymbol ? symbolsChars : "";

//     if (allowedChars.length === 0) {
//         result.innerHTML = "Please select at least one option!";
//         copyButton.style.cursor = "not-allowed";
//         result.style.cursor = "-webkit-grab";
//         result.style.userSelect = "none";
//         copyButton.removeEventListener("click", () => { return; });
//         return;
//     }
    
//     for (let i = 0; i < passwordLength; i++) {
//         let randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }
    
//     result.innerHTML = password;
//     console.log(password);
//     copyButton.style.cursor = "pointer";
//     result.style.cursor = "crosshair";
//     result.style.userSelect = "auto";
// }

// const myResult = document.getElementById('result');
// const copyButton = document.getElementById('copyButton');

// copyButton.addEventListener('click', () => {
//     // Create a temporary text area element
//     const tempTextArea = document.createElement('textarea');
//     tempTextArea.value = myResult.textContent;

//     // Add the temporary text area to the DOM
//     document.body.appendChild(tempTextArea);

//     // Select the text in the text area
//     tempTextArea.select();

//     // Copy the selected text to the clipboard
//     document.execCommand('copy');

//     // Remove the temporary text area from the DOM
//     document.body.removeChild(tempTextArea);
    
    
//     copyButton.innerText = "Copied";
//     copyButton.style.background = "lime";
    
//     // Optionally, display a message to indicate successful copy
//     setTimeout(() => {
//         copyButton.innerText = "Copy Password";
//         copyButton.style.background = "hsla(0, 0%, 12%, 0.805)";
//     }, 1500);
    
// });

let containsUppercase = false;
let containsLowercase = false;
let containsNumber = false;
let containsSymbol = false;

const switch1 = document.getElementById("switch1");
const switch2 = document.getElementById("switch2");
const switch3 = document.getElementById("switch3");
const switch4 = document.getElementById("switch4");

document.querySelector(".sections").addEventListener("change", () => {
    containsUppercase = switch1.checked;
    containsLowercase = switch2.checked;
    containsNumber = switch3.checked;
    containsSymbol = switch4.checked;

    console.log({
        containsUppercase,
        containsLowercase,
        containsNumber,
        containsSymbol
    });
});

const result = document.getElementById("result");
const inputBox = document.getElementById("inputBox");
const passwordStrengthDiv = document.createElement("div");
passwordStrengthDiv.classList.add("password-strength");
document.body.appendChild(passwordStrengthDiv); // Add the strength display to the body

function generatePassword() {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbersChars = "1234567890";
    const symbolsChars = `!@#$%&*'"()_-=)/+`;

    let passwordLength = parseInt(inputBox.value, 10);
    let allowedChars = "";
    let password = "";

    allowedChars += containsUppercase ? uppercaseChars : "";
    allowedChars += containsLowercase ? lowercaseChars : "";
    allowedChars += containsNumber ? numbersChars : "";
    allowedChars += containsSymbol ? symbolsChars : "";

    if (allowedChars.length === 0) {
        result.innerHTML = "Please select at least one option!";
        copyButton.style.cursor = "not-allowed";
        result.style.cursor = "-webkit-grab";
        result.style.userSelect = "none";
        copyButton.removeEventListener("click", () => { return; });
        return;
    }
    
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    result.innerHTML = password;
    console.log(password);
    copyButton.style.cursor = "pointer";
    result.style.cursor = "crosshair";
    result.style.userSelect = "auto";

    // Estimate password strength
    estimateCrackTime(passwordLength, allowedChars.length);
}

const myResult = document.getElementById('result');
const copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', () => {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = myResult.textContent;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    
    copyButton.innerText = "Copied";
    copyButton.style.background = "lime";
    
    setTimeout(() => {
        copyButton.innerText = "Copy Password";
        copyButton.style.background = "hsla(0, 0%, 12%, 0.805)";
    }, 1500);
});

// Function to estimate crack time
function estimateCrackTime(passwordLength, characterSetSize) {
    const guessesPerSecond = 1e12; // 1 trillion guesses per second (estimate)
    const totalCombinations = Math.pow(characterSetSize, passwordLength);
    const secondsToCrack = totalCombinations / guessesPerSecond;

    let timeToCrack;
    if (secondsToCrack < 60) {
        timeToCrack = `${Math.floor(secondsToCrack)} seconds`;
    } else if (secondsToCrack < 3600) {
        timeToCrack = `${Math.floor(secondsToCrack / 60)} minutes`;
    } else if (secondsToCrack < 86400) {
        timeToCrack = `${Math.floor(secondsToCrack / 3600)} hours`;
    } else if (secondsToCrack < 31536000) {
        timeToCrack = `${Math.floor(secondsToCrack / 86400)} days`;
    } else if (secondsToCrack < 3.154e9) {
        timeToCrack = `${Math.floor(secondsToCrack / 31536000)} years`;
    } else {
        timeToCrack = `${(secondsToCrack / 3.154e9).toFixed(1)} billion years`;
    }

    passwordStrengthDiv.innerHTML = `<strong>Estimated Crack Time:</strong> ${timeToCrack}`;
}
