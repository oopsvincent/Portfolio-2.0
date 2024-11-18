// const button1 = document.getElementById('p1');
// const button2 = document.getElementById('p2');
// const button3 = document.getElementById('p3');

// const bSection = document.getElementById('beginnerSection');
// const iSection = document.getElementById('intermediateSection');
// const aSection = document.getElementById('advancedSection');

// // Toggle visibility for Beginner Section
// button1.addEventListener("click", () => {
//     bSection.style.display = "flex";
//     console.log("Hello");
//     button1.removeEventListener("click", () => {
//         console.log("Hola");
//     });
//     button1.addEventListener("click", () => {
//         bSection.style.display = "none";
//     })
//     button1.removeEventListener("click", () => {
//         console.log("Hola");
//     });
// });

// // Toggle visibility for Intermediate Section
// button2.addEventListener("click", () => {
//     iSection.classList.toggle("flex");
// });

// // Toggle visibility for Advanced Section
// button3.addEventListener("click", () => {
//     aSection.classList.toggle("flex");
// });


// JavaScript for toggling sections
const button1 = document.getElementById('p1');
const button2 = document.getElementById('p2');
const button3 = document.getElementById('p3');

const bSection = document.getElementById('beginnerSection');
const iSection = document.getElementById('intermediateSection');
const aSection = document.getElementById('advancedSection');

// Toggle visibility for Beginner Section
button1.addEventListener("click", () => {
    bSection.classList.toggle("visible");
    console.log("Beginner section toggled");
});

// Toggle visibility for Intermediate Section
button2.addEventListener("click", () => {
    iSection.classList.toggle("visible");
    console.log("Intermediate section toggled");
});

// Toggle visibility for Advanced Section
button3.addEventListener("click", () => {
    aSection.classList.toggle("visible");
    console.log("Advanced section toggled");
});
