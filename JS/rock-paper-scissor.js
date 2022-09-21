const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let playerChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === playerChoice) {
        result = `it's a draw!`
    }
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        result = `you won!`
    }
    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result = `you lost!`
    }
    if (computerChoice === 'paper' && playerChoice === 'scissors') {
        result = `you won!`
    }
    if (computerChoice === 'paper' && playerChoice === 'rock') {
        result = `you lost!`
    }
    if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result = `you won!`
    }
    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        result = `you lost!`
    }
    resultDisplay.innerHTML = result
}
