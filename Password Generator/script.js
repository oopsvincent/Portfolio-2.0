// let containsUppercase = false;
// let containsLowercase = false;
// let containsNumber = false;
// let containsSymbol = false;

// const switch1 = document.getElementById("switch1");
// const switch2 = document.getElementById("switch2");
// const switch3 = document.getElementById("switch3");
// const switch4 = document.getElementById("switch4");

// document.querySelector(".sections").addEventListener("change", () => {
//     if (switch1.checked) {
//         containsUppercase = true;
//         console.log(containsUppercase);
        
//     }
//     else{
//         containsUppercase = false;
//         console.log(containsUppercase)
//     }
//     if (switch2.checked) {
//         containsLowercase = true;
//         console.log(containsLowercase);
        
//     }
//     else{
//         containsLowercase = false;
//         console.log(containsLowercase)
//     }
//     if (switch3.checked) {
//         containsNumber = true;
//         console.log(containsNumber);
        
//     }
//     else{
//         containsNumber = false;
//         console.log(containsNumber)
//     }
//     if (switch4.checked) {
//         containsSymbol = true;
//         console.log(containsSymbol);
        
//     }
//     else{
//         containsSymbol = false;
//         console.log(containsSymbol)
//     }
// })


// const result = document.getElementById("result");
// const inputBox = document.getElementById("inputBox");

// function generatePassword(value, containsUppercase, containsLowercase, containsNumber, containsSymbol) {
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const numbersChars = "1234567890"
//     const symbolsChars = `!@#$%&*'"()_-=)/\+`

//     let passwordLength = inputBox.value;

//     let allowedChars = "";
//     let password = "";
    
//     allowedChars += containsUppercase ? uppercaseChars : "";
//     allowedChars += containsLowercase ? lowercaseChars : "";
//     allowedChars += containsNumber ? numbersChars : "";
//     allowedChars += containsSymbol ? symbolsChars : ""

//     for (let i = 0; i > passwordLength.length; i++) {
//         let randomNumber = Math.floor(Math.random() * value);
//         password += allowedChars[randomNumber];

//     }


//     result.innerHTML = password;
//     console.log(password);
    
// }



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
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    result.innerHTML = password;
    console.log(password);
}


const myResult = document.getElementById('result');
const copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', () => {
  // Create a temporary text area element
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = myResult.textContent;

  // Add the temporary text area to the DOM
  document.body.appendChild(tempTextArea);

  // Select the text in the text area
  tempTextArea.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the temporary text area from the DOM
  document.body.removeChild(tempTextArea);

  // Optionally, display a message to indicate successful copy
  alert('Text copied to clipboard!');
});