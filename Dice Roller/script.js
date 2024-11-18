
function rollDice() {
    const numOfDice = document.getElementById("rollerInput").value;
    const diceNumbers = document.getElementById("resultNumbers");
    const diceImages = document.getElementById("resultImages");
    let values = [];
    let images = [];
    
    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="${value}">`)
    }
    diceNumbers.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}
