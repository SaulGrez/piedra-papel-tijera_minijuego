const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('img')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
   userChoice = e.target.id
   playerChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
}))

function generateComputerChoice(){
  
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)

    if(randomNumber === 1){

        computerChoice = 'paper';

    }

    if(randomNumber === 2){

        computerChoice = 'scissor';

    }

    if(randomNumber === 3){

        computerChoice = 'rock';

    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
   
    if(computerChoice === userChoice ){
        
        result = 'It´s a Draw'
    }

    if(computerChoice === 'paper' && userChoice === 'rock' ){
        
        result = 'You Lost'
    }

    if(computerChoice === 'paper' && userChoice === 'scissor' ){
        
        result = 'You Win'
    }

    if(computerChoice === 'scissor' && userChoice === 'rock' ){
        
        result = 'You Win'
    }

    
    if(computerChoice === 'scissor' && userChoice === 'paper' ){
        
        result = 'You Lost'
    }

    
    if(computerChoice === 'rock' && userChoice === 'paper' ){
        
        result = 'You Win'
    }

    
    if(computerChoice === 'rock' && userChoice === 'scissor' ){
        
        result = 'You Lost'
    }

    resultDisplay.innerHTML = result;
}