const loader = document.querySelector('.label');
loader.style.display = 'none';
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

document.addEventListener('contextmenu', () => {
    alert();
})

function playGame(playerChoice){
    loader.style.display = 'flex';
    setTimeout(() =>{
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = '';
    
        if(playerChoice === computerChoice){
            result = "IT'S A TIE!";
        } else{
            switch(playerChoice){
                case 'rock':
                    result = computerChoice === 'scissors' ? 'YOU WIN!' : 'YOU LOSE!'
                    break;
                case 'paper':
                    result = computerChoice === 'rock' ? 'YOU WIN!' : 'YOU LOSE!';
                    break;
                case 'scissors':
                    result = computerChoice === 'paper' ? 'YOU WIN!' : 'YOU LOSE!';
                    break;
            }
        }

        resultDisplay.classList.remove('greenText', 'redText');
        
        switch (result) {
            case 'YOU WIN!':
                resultDisplay.classList.add('greenText');
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                break;
            case 'YOU LOSE!':
                resultDisplay.classList.add('redText');
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                break;
            default:
                break;
            }

        playerDisplay.textContent = `Player: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`
        resultDisplay.textContent = result;
        loader.style.display = 'none'
    }, 1000)

    
}
