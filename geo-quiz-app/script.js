const checkBtn = document.getElementById('check');
const buttons = document.querySelectorAll('.answer-button');  // All answer buttons
const flagImg = document.getElementById('flag');  // For displaying the flag
const usedNumbers = new Set();  // Track which country numbers have been used
let correctAnswer = "";  // Store the correct answer
let allCountryData = [];  // Store country data
const app = document.getElementById('game');
let totalScore;
let currentScore = 1;
let currentQuestionIndex;



async function getDataWorld() {
    currentScore = 1;
    usedNumbers.clear();
    const resource = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,capital,area,currencies');
    allCountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataEurope() {
    currentScore = 1;
    usedNumbers.clear();
    const resource = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,flags,population,capital,area,currencies');
    allCountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataAsia() {
    currentScore = 1;
    usedNumbers.clear();
    const resource = await fetch('https://restcountries.com/v3.1/region/asia?fields=name,flags,population,capital,area,currencies');
    allCountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataAfrica() {
    currentScore = 1;
    usedNumbers.clear();
    const resource = await fetch('https://restcountries.com/v3.1/region/africa?fields=name,flags,population,capital,area,currencies');
    CountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function gerDataOceania() {
    currentScore = 1;
    usedNumbers.clear();
    const resource = await fetch('https://restcountries.com/v3.1/region/oceania?fields=name,flags,population,capital,area,currencies');
    CountryData = await resource.json();
    app.style.display = "flex"
    getData();
}


async function getDataAmerica() {
    currentScore = 1;
    usedNumbers.clear();
    const resource = await fetch('https://restcountries.com/v3.1/subregion/America?fields=name,flags,population,capital,area,currencies');
    CountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataNAmerica() {
    currentScore = 1;
    usedNumbers.clear();
    const resource = await fetch('https://restcountries.com/v3.1/subregion/North%20America?fields=name,flags,population,capital,area,currencies');
    CountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataCAmerica() {
    currentScore = 1;
    usedNumbers.clear();
    const resource = await fetch('https://restcountries.com/v3.1/subregion/Central%20America?fields=name,flags,population,capital,area,currencies');
    CountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataSAmerica() {
    currentScore = 1;
    usedNumbers.clear();
    const resource = await fetch('https://restcountries.com/v3.1/subregion/South%20America?fields=name,flags,population,capital,area,currencies');
    CountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataArctic() {
    currentScore = 1;
    usedNumbers.clear();
    const resource = await fetch('https://restcountries.com/v3.1/region/arctic?fields=name,flags,population,capital,area,currencies');
    CountryData = await resource.json();
    app.style.display = "flex"
    getData();
}

async function getDataAntarctic() {
    currentScore = 1;
    usedNumbers.clear();
    const resource = await fetch('https://restcountries.com/v3.1/region/antarctic?fields=flags,name');
    const data = await resource.json();
    app.style.display = "flex";
    getData();
}


async function getData() {
    document.querySelector('.sp-in').forEach(element => element.style.display = "none");
    document.getElementById('game').style.display = "flex";
    document.getElementById('change-region').style.display = "flex";
    document.getElementById('head-1').style.display = "none";
    document.getElementById('head-2').style.display = "none";
    document.getElementById('buttons-home').style.display = "none";
    document.getElementById("next-btn")?.remove();
    // let buttonCont = document.querySelector('.answer-button');  // Fixed selector
    buttons.forEach(button => button.style.display = "block");

    document.getElementById('status').textContent = "";
    document.getElementById('off-name').textContent = '';
    document.getElementById('cap-city').textContent = '';
    document.getElementById('population').textContent = '';
    document.getElementById('area').textContent = '';

    totalScore = CountryData.length;
    document.getElementById('score').innerHTML = `${currentScore} / ${totalScore}`;
    
    // Reset when all countries have been used
    if (usedNumbers.size === allCountryData.length) {
        usedNumbers.clear();
        currentScore = 0;
        alert("All countries have been answered! Resetting...");
        
    }
    
    let rNumber;
    do {
        rNumber = Math.floor(Math.random() * allCountryData.length);
    } while (usedNumbers.has(rNumber));  // Keep generating until we get an unused number
    
currentQuestionIndex = rNumber;

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
        currentScore++;
        document.querySelectorAll('.sp-in').forEach(element => element.style.display = "flex");
        document.getElementById('status').textContent = "Correct";
        document.getElementById('off-name').textContent = `${allCountryData[currentQuestionIndex].name.official}`;
        document.getElementById('cap-city').textContent = `${allCountryData[currentQuestionIndex].capital[0]}`;
        const country = allCountryData[currentQuestionIndex]; // Example: Norway
        const currencyKey = Object.keys(country.currencies)[0]; // Get the first currency key (e.g., "NOK")
        const currencyName = country.currencies[currencyKey].name;
        const currencySymbool = country.currencies[currencyKey].symbol;
        document.getElementById('currency').textContent = `${currencySymbool} ${currencyName}`;
        document.getElementById('population').textContent = `${allCountryData[currentQuestionIndex].population}`;
        document.getElementById('area').textContent = `${allCountryData[currentQuestionIndex].area} Km²`

        document.getElementById('status').style.color = "lime";
        document.getElementById('status').style.fontSize = "2rem";


        // Hide all answer buttons
        let buttonCont = document.querySelectorAll('.answer-button');  // Fixed selector
        buttonCont.forEach(element => element.style.display = "none");

        // Remove any existing "Continue" button to prevent duplication
        let existingNextBtn = document.getElementById("next-btn");
        if (existingNextBtn) {
            existingNextBtn.remove();
        }

        // Create and append a new "Continue" button
        const nextButton = document.createElement('button');
        nextButton.id = "next-btn";
        nextButton.textContent = "Continue";
        document.getElementById('buttons-container').appendChild(nextButton);

        nextButton.addEventListener("click", getData);
    } else {
        document.getElementById('status').textContent = "Wrong!! Try Again";
        document.getElementById('status').style.color = "red";
        document.getElementById('status').style.fontSize = "2rem";
    }
}


// NO NEED BECAUSE USING ONCLICK
// document.getElementById('world').addEventListener("click", getDataWorld);
// document.getElementById('europe').addEventListener("click", getDataEurope);
// document.getElementById('asia').addEventListener("click", getDataAsia);
// document.getElementById('america').addEventListener("click", getDataAmerica);
// document.getElementById('n-america').addEventListener("click", getDataNAmerica);
// document.getElementById('c-america').addEventListener("click", getDataCAmerica);
// document.getElementById('s-america').addEventListener("click", getDataSAmerica);
// document.getElementById('oceania').addEventListener("click", gerDataOceania);
// document.getElementById('africa').addEventListener("click", getDataAfrica);
// document.getElementById('arctic').addEventListener("click", getDataArctic);
// document.getElementById('antarctica').addEventListener("click", getDataAntarctic);

document.getElementById('change-region').addEventListener('click', () => {
    document.getElementById('buttons-home').style.display = "flex";
    document.getElementById('change-region').style.display = "none";
    document.getElementById('game').style.display = "none";
});
