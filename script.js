let userScore = 0;
let computerScore = 0;

init();

function computerPlay(){
    let min = Math.ceil(1);
    let max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkVictory(string){
    const resultSelector = document.querySelector('.results');

    if (string.slice(0,8) == "You win!") {userScore++;}
    else if (string.slice(0,8) == "You lose") {computerScore++;}

    resultSelector.textContent = string;
    
    checkWinner();
}

function checkWinner(){
    const scoreSelector = document.querySelector('.score');

    if(userScore >= 5){
        scoreSelector.textContent = "You won the game!";
    }
    else if(computerScore >=5){
        scoreSelector.textContent = "You lost the game!";
    }
    else {
        scoreSelector.textContent = `YOU: ${userScore} - COMPUTER: ${computerScore}`;
    }
}

function roundPlay(userSelection){
    let computerSelection = computerPlay();

    if(userSelection == 1 && computerSelection == 1){checkVictory("Draw! Both chose Rock!");}
    else if(userSelection == 1 && computerSelection == 2){checkVictory("You lose! Paper beats Rock!");}
    else if(userSelection == 1 && computerSelection == 3){checkVictory("You win! Rock beats Scissors!");}
    else if(userSelection == 2 && computerSelection == 1){checkVictory("You win! Paper beats Rock!");}
    else if(userSelection == 2 && computerSelection == 2){checkVictory("Draw! Both chose Paper!");}
    else if(userSelection == 2 && computerSelection == 3){checkVictory("You lose! Scissors beats Paper!");}
    else if(userSelection == 3 && computerSelection == 1){checkVictory("You lose! Rock beats Scissors!");}
    else if(userSelection == 3 && computerSelection == 2){checkVictory("You win! Scissors beats Paper!");}
    else if(userSelection == 3 && computerSelection == 3){checkVictory("Draw! Both chose Scissors!");}
}

function addEventListeners(){
    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(btn => btn.addEventListener('click', event => {

        const btnClass = event.target.className;

        if(btnClass === 'btn-rock'){roundPlay(1);}
        else if(btnClass === 'btn-paper'){roundPlay(2);}
        else {roundPlay(3);}

    }))
}

function init(){
    const scoreSelector = document.querySelector('.score');
    const resultSelector = document.querySelector('.results');

    scoreSelector.textContent = `YOU: ${userScore} - COMPUTER: ${computerScore}`;
    resultSelector.textContent = "Let's play! Choose one!";

    addEventListeners();
}