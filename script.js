let userScore = 0;
let computerScore = 0;

addEventListeners();

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

function checkWinner(userScore, computerScore){
    if(userScore >= 3){return "You won the game!";}
    else if(computerScore >=3){return "You lost the game!";}
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
