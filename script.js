/**Script main objective: Make the user play 5 rounds of "Rock, Paper and Scissors" against the computer.
 * 
 * Things that I need to do (ODIN recommendations):
 * - Write a function named computerPlay() that will randomly return either Rock, Paper or Scissors";
 * - Write a function that plays a single round of the game and that takes two parameters - playerSelection and computerSelection - and returns a string that declares the winner of the round like so: "You lose! Paper beats Rock!"
 * OBS: Make sure that the playerSelection parameter is case insensitive! And that the functions returns the result in a function call like console.log(function());
 * - Write a game() function that calls roundPlay() 5 times and returns the winner of the game at the end!
 * OBS: Use prompt() to get the user input!;
 * 
 * ========================================
 * 
 * PSEUDOCODE:
 * 
 * Function that returns the computer play (computerPlay()):
 * -Returns a random integer number, either 1, 2 or 3;
 * 
 * Function that returns the user play (userPlay()):
 * -Prompts a user input and gets a string;
 * -If the value is valid converts the string to a integer number, either 1, 2 or 3;
 * -If not sends a error message and starts the process again;
 * -Returns the number;
 * 
 * Function that checks the result (checkVictory(string)):
 * -Creates a undefined variable named result;
 * -If string equals "You win!" return result = true;
 * -If string equals "You lose" return result = false;
 * 
 * Function that checks the winner (checkWinner(userScore, computerScore)):
 * -If userScore is equal or greater than 3 return "You won the game!";
 * -Else if computerScore is equal or greater than 3 return "You lost the game!";
 * 
 * Function that plays a round roundPlay():
 * -Creates a empty string named result;
 * -Creates a variable named userSelection and attributes its value calling userPlay();
 * -Creates a variable named computerSelection and attributes its value calling computerPlay();
 * -If userSelection equals 1 and computerSelection equals 1 return result "Draw! Both chose Rock!";
 * -If userSelection equals 1 and computerSelection equals 2 return result "You lose! Paper beats Rock!";
 * -If userSelection equals 1 and computerSelection equals 3 return result "You win! Rock beats Scissors!";
 * -If userSelection equals 2 and computerSelection equals 1 return result "You win! Paper beats Rock!";
 * -If userSelection equals 2 and computerSelection equals 2 return result "Draw! Both chose Paper!";
 * -If userSelection equals 2 and computerSelection equals 3 return result "You lose! Scissors beats Paper!";
 * -If userSelection equals 3 and computerSelection equals 1 return result "You lose! Rock beats Scissors!";
 * -If userSelection equals 3 and computerSelection equals 2 return result "You win! Scissors beats Paper!";
 * -If userSelection equals 3 and computerSelection equals 3 return result "Draw! Both chose Scissors!";
 * 
 * Function that plays a full game with 5 rounds (game()):
 * -Creates a empty string result;
 * -Creates a variable named userScore with value = 0;
 * -Creates a variable named computerScore with value = 0;
 * -Creates a loop that runs until a winner is decided (Better of 5, excluding draws):
 * --Creates a empty string named result and attributes its value calling roundPlay();
 * --Prints result in the console;
 * --If checkVictory() is undefined repeats the loop without counter increment;
 * --If checkVictory() is true:
 * ---Increment userScore and loop counter;
 * --If checkVictory() is false:
 * ---Increment computerScore and loop counter;
 * --Equals result to checkWinner(userScore, computerScore);
 * -Returns result;
 * 
 * Calls a game at page initialization: console.log(game());
 */

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
