// const button = document.getElementById("submitButton");
// const box = document.getElementById("answerBox");
// const input = document.getElementById("userAge");



// button.addEventListener("click", () => {
//     const userAge = Number(input.value);
//     if (userAge >= 18) {
//         box.innerText = "You are old enough to enter this site."
//     } else if (userAge > 99) {  
//         box.innerText = "You are too old to enter this site."
//     } else if (userAge == 0) {
//         box.innerText = "You are just born, you can't enter this site."
//     } else if (userAge < 0) {
//         box.innerText = "Your age can't be less than 0."
//     } else if (userAge > 0 && userAge <18) {
//         box.innerText = "You are a Minor you can't enter this site."
//     }
// });

const button = document.getElementById("submitButton");
const box = document.getElementById("answerBox");
const input = document.getElementById("userAge");

button.addEventListener("click", () => {
    const userAge = Number(input.value);  // Move the value retrieval inside the event listener
    
    if (userAge >= 18 && userAge <= 99) {
        box.innerHTML = `You are old enough to enter this site. <a href="../index.html">Go Home</a>`;
    } else if (userAge > 99) {  
        box.innerText = "You are too old to enter this site.";
    } else if (userAge == 0) {
        box.innerText = "You are just born, you can't enter this site.";
    } else if (userAge < 0) {
        box.innerText = "Your age can't be less than 0.";
    } else if (userAge > 0 && userAge < 18) {
        box.innerText = "You are a Minor, you can't enter this site.";
    }
});


input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        
        const userAge = Number(input.value);  // Move the value retrieval inside the event listener
        
        if (userAge >= 18 && userAge <= 99) {
            box.innerHTML = `You are old enough to enter this site. <a href="../index.html">Go Home</a>`;
        } else if (userAge > 99) {  
            box.innerText = "You are too old to enter this site.";
        } else if (userAge == 0) {
            box.innerText = "You are just born, you can't enter this site.";
        } else if (userAge < 0) {
            box.innerText = "Your age can't be less than 0.";
        } else if (userAge > 0 && userAge < 18) {
            box.innerText = "You are a Minor, you can't enter this site.";
        }
    }
})