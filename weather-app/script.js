const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = `220886e120a888d0f9492705f726acfd`;

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch(error){
            console.error(error);
            displayError(error);
        }
    } else {
        displayError("Please enter a city");
    }

})

async function getWeatherData(city) {
    apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiURL);

console.log(response);

    if(!response.ok) {
        throw new Error("Could not fetch weather data");
        
    }
``
    return await response.json();
}

function displayWeatherInfo(data) {
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * 9/5 + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = `${description}`;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    cityDisplay.classList.add("tempDisplay");
    cityDisplay.classList.add("humidityDisplay");
    cityDisplay.classList.add("descDisplay");
    cityDisplay.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);

}

function getWeatherEmoji(weatherID) {
    switch (true) {
        case (weatherID >= 200 && weatherID < 300):
            return "⛈️";
            break;
        case (weatherID >= 300 && weatherID < 400):
            return "🌦️";
            break;
        case (weatherID >= 500 && weatherID < 600):
            return "🌧️";
            break;
        case (weatherID >= 600 && weatherID < 700):
            return "❄️";
            break;
        case (weatherID >= 700 && weatherID < 800):
            return "🍃";
            break;
        case (weatherID === 800):
            return "☀️";
            break;
        case (weatherID >= 801 && weatherID < 900):
            return "☁️";
            break;
    
        default:
            break;
    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = '';
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}