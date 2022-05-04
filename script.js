function computerPlay(){
    let min = Math.ceil(1);
    let max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function userPlay(){
    let string = prompt("Let's play! Type rock, paper or scissors!").toLowerCase();
    if(string == "rock"){return 1;}
    else if (string == "paper"){return 2;}
    else if (string == "scissors"){return 3;}
    else {
        alert("Please type a valid play! Either rock, paper or scissors!");
        return userPlay();
    }
}

function checkVictory(string){
    if (string.slice(0,8) == "You win!") {return true;}
    else if (string.slice(0,8) == "You lose") {return false;}
}

function checkWinner(userScore, computerScore){
    if(userScore >= 3){return "You won the game!";}
    else if(computerScore >=3){return "You lost the game!";}
}

function roundPlay(){
    let userSelection = userPlay();
    let computerSelection = computerPlay();

    if(userSelection == 1 && computerSelection == 1){return "Draw! Both chose Rock!";}
    else if(userSelection == 1 && computerSelection == 2){return "You lose! Paper beats Rock!";}
    else if(userSelection == 1 && computerSelection == 3){return "You win! Rock beats Scissors!";}
    else if(userSelection == 2 && computerSelection == 1){return "You win! Paper beats Rock!";}
    else if(userSelection == 2 && computerSelection == 2){return "Draw! Both chose Paper!";}
    else if(userSelection == 2 && computerSelection == 3){return "You lose! Scissors beats Paper!";}
    else if(userSelection == 3 && computerSelection == 1){return "You lose! Rock beats Scissors!";}
    else if(userSelection == 3 && computerSelection == 2){return "You win! Scissors beats Paper!";}
    else if(userSelection == 3 && computerSelection == 3){return "Draw! Both chose Scissors!";}
}

function game(){
    let resultGame;
    let userScore = 0;
    let computerScore = 0;
    while(resultGame == undefined){
        let resultRound = roundPlay();
        console.log(resultRound);
        if(checkVictory(resultRound) == undefined){}
        else if(checkVictory(resultRound) == true){userScore++;}
        else {computerScore++;}

        resultGame = checkWinner(userScore, computerScore);
    }

    return resultGame;
}

console.log(game());