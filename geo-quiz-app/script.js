const checkBtn = document.getElementById('check');
const buttons = document.querySelectorAll('.answer-button');  // All answer buttons
const flagImg = document.getElementById('flag');  // For displaying the flag
const usedNumbers = new Set();  // Track which country numbers have been used
let correctAnswer = "";  // Store the correct answer
let allCountryData = [];  // Store country data
const app = document.getElementById('game');

async function getDataWorld() {
    const resource = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
    allCountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataEurope() {
    const resource = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,flags');
    allCountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataAsia() {
    const resource = await fetch('https://restcountries.com/v3.1/region/asia?fields=name,flags');
    allCountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function gerDataAfrica() {
    const resource = await fetch('https://restcountries.com/v3.1/region/africa?fields=name,flags');
    allCountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function gerDataOceania() {
    const resource = await fetch('https://restcountries.com/v3.1/region/oceania?fields=name,flags');
    allCountryData = await resource.json();
    app.style.display = "flex"
    getData();
}


async function getDataAmerica() {
    const resource = await fetch('https://restcountries.com/v3.1/subregion/America?fields=name,flags');
    allCountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataNAmerica() {
    const resource = await fetch('https://restcountries.com/v3.1/subregion/North%20America?fields=name,flags');
    allCountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataCAmerica() {
    const resource = await fetch('https://restcountries.com/v3.1/subregion/Central%20America?fields=name,flags');
    allCountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataSAmerica() {
    const resource = await fetch('https://restcountries.com/v3.1/subregion/South%20America?fields=name,flags');
    allCountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function gerDataArctic() {
        const resource = await fetch('https://restcountries.com/v3.1/region/arctic?fields=flags,name');
        const data = await resource.json();
        app.style.display = "flex";
        getData();
}

async function gerDataAntarctic() {
        const resource = await fetch('https://restcountries.com/v3.1/region/antarctic?fields=flags,name');
        const data = await resource.json();
        app.style.display = "flex";
        getData();
}


async function getData() {

    // Reset when all countries have been used
    if (usedNumbers.size === allCountryData.length) {
        usedNumbers.clear();
        alert("All countries have been answered! Resetting...");
    }
    
    let rNumber;
    do {
        rNumber = Math.floor(Math.random() * allCountryData.length);
    } while (usedNumbers.has(rNumber));  // Keep generating until we get an unused number
    
    usedNumbers.add(rNumber);  // Add to used numbers
    
    const { name, flags } = allCountryData[rNumber];
    correctAnswer = name.common.toLowerCase();  // Store the correct answer
    
    flagImg.src = flags.svg;  // Display flag
    generateAnswerButtons(rNumber);  // Generate buttons with answers
}

// Generate the 6 answer buttons with 5 incorrect and 1 correct answer
function generateAnswerButtons(correctIndex) {
    const correctCountry = allCountryData[correctIndex];
    const incorrectAnswers = [];

    // Randomly pick 5 incorrect answers from countries that aren't the correct one
    while (incorrectAnswers.length < 5) {
        const randomIndex = Math.floor(Math.random() * allCountryData.length);
        if (randomIndex !== correctIndex && !incorrectAnswers.includes(randomIndex)) {
            incorrectAnswers.push(randomIndex);
        }
    }

    // Shuffle the answers (one correct and 5 incorrect ones)
    const answers = [correctIndex, ...incorrectAnswers];
    shuffleArray(answers);  // Shuffle to randomize button positions

    // Assign the country names to the buttons
    buttons.forEach((button, index) => {
        const country = allCountryData[answers[index]];
        button.textContent = country.name.common;
        button.onclick = () => checkAnswer(country.name.common);  // Set the button click listener
    });
}

// Shuffle function to randomize button order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
}

// Check the answer when a button is clicked
function checkAnswer(selectedAnswer) {
    if (selectedAnswer.toLowerCase() === correctAnswer) {
        alert("Correct! 🎉 Moving to the next flag...");
        getData();  // Load the next flag and answers
    } else {
        alert("Wrong! Try again.");
    }
}

document.getElementById('world').addEventListener("click", getDataWorld);
document.getElementById('europe').addEventListener("click", getDataEurope);
document.getElementById('asia').addEventListener("click", getDataAsia);
document.getElementById('america').addEventListener("click", getDataAmerica);
document.getElementById('n-america').addEventListener("click", getDataNAmerica);
document.getElementById('c-america').addEventListener("click", getDataCAmerica);
document.getElementById('s-america').addEventListener("click", getDataSAmerica);
document.getElementById('oceania').addEventListener("click", gerDataOceania);
document.getElementById('africa').addEventListener("click", gerDataAfrica);
document.getElementById('arctic').addEventListener("click", gerDataArctic);
document.getElementById('antarctica').addEventListener("click", gerDataAntarctic);