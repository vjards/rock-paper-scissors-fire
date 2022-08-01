/*********************************
        GLOBAL VARIABLES
*********************************/
const playerSelectionArea = document.createElement('h1')
const computerSelectionArea = document.createElement('h1')
const resultsArea = document.createElement('h1')
const gameContainer = document.getElementById('game')
gameContainer.append(playerSelectionArea, computerSelectionArea, resultsArea)

const selections = ['💎', '✂️', '🧻','🔥'] 
let playerSelection
let computerSelection


/********************************
      CLICK EVENT FUNCTION
********************************/
const clickEvent=(e)=>{
    playerSelection=e.target.id
    playerSelectionArea.innerHTML= 'You:  ' + playerSelection
    generateComputerChoice()
    gameResults()
};

/***************************************
            GAME BUTTONS 
**************************************/
for(let i = 0; i < selections.length; i++){
    const button = document.createElement('button') // declare local variable
    button.id=selections[i] //appending the id element to the button variable that equals the values of the selections array
    button.innerHTML=selections[i] //append inner HTML to see the buttons on the browser
    button.addEventListener('click', clickEvent) //add click event to the buttons
    gameContainer.appendChild(button)    //connecting the button variable to the container
}

/********************************* 
   COMPUTER SELECTION FUNCTION
************************************/
const generateComputerChoice =()=>{
    const randomSelection = selections[Math.floor(Math.random()*selections.length)] //local variable
    computerSelection=randomSelection
    computerSelectionArea.innerHTML= 'Computer:   ' + computerSelection
};

/**************************************
         GAME RESULTS FUNCTION
****************************************/
const gameResults =()=>{
    switch (playerSelection+computerSelection){
        case '💎✂️':
        case '🧻💎':
        case '✂️🧻':
        case '💎🔥':
        case '🔥✂️':
        case '🔥🧻':
         resultsArea.innerHTML = 'You WIN!🎉'
        break
        case '✂️💎':
        case '💎🧻':
        case '🧻✂️':
        case '🔥💎':
        case '✂️🔥':
        case '🧻🔥':
         resultsArea.innerHTML = 'You LOSE!💩'
        break
        case '✂️✂️':
        case '💎💎':
        case '🧻🧻':
        case '🔥🔥':
        resultsArea.innerHTML = 'It is a TIE!🎀'
    }
};
/***************************************************************************************************************/
/*Assigning a click event to the buttons when the user clicks a button to select a choice to reveal the selection
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
 userChoice = e.target.id
 userChoiceDisplay.innerHTML = userChoice //DISPLAY USER CHOICE ON THE BROWSER
}))*/

/*****************************************************************************
COMPUTER FUNCITONALITY IS NOT WORKING!!!!!!
Computer choice functionality: 
 The computer will randomly generates a number from (0-3)to make its selection
******************************************************************************/
/*generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()* possibleChoices.length)     

    //LOGIC OF THE GAME
    if(randomNumber === 1){
        computerChoice = 'paper'
    }     
    if(randomNumber === 2){
        computerChoice = 'scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'tornado'
    }
    if (randomNumber === 4){
        computerChoice = 'paper'
    }
computerChoiceDisplay.innerHTML= computerChoice //DISPLAY COMPUTER CHOICE ON THE BROWSER
}*/


/***********************************GAME RESULTS FUNCTION*******************************************/

/*function getResults(){
    if(computerChoice === userChoice){
        result = 'It is a tie.'
    }
    if(computerChoice === 'rock' && userChoice==='scissors'){
        result = 'You lose'
    }
    if(computerChoice === 'scissors' && userChoice==='rock'){
        result = 'You win'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You win'
    }
    if(computerChoice ===  'scissors' && userChoice === 'paper'){
        result = 'You lose'
    }
    if(computerChoice === 'paper' && userChoice ==='rock'){
        result = 'You lose'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You win'
    }
    if(computerChoice === 'tornado' && userChoice === 'rock'){
        result = 'You lose'
    }
    if(computerChoice === 'rock' && userChoice === 'tornado'){
        result = 'You win'
    }
    if(computerChoice === 'tornado' && userChoice === 'scissors'){
        result = 'You lose'
    }
    if(computerChoice === 'scissors' && userChoice === 'torndo'){
        result = 'You win'
    }
    if(computerChoice === 'tornado' && userChoice === 'paper'){
        result = 'You lose'
    }
    if(computerChoice === 'paper' && userChoice === 'tornado'){
        result = 'You win'
    }
    resultDisplay.innerHTML=result //DISPLAY RESULT ON THE BROWSER
};*/

