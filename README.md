# odin-rock-paper-scissors

This is my third project made while following the Odin Project Foundations course. The project consists in a best of 5 rounds rock, paper, scissors game played against the computer directly on the browser console.

Some of the skills demonstrated on this project:
    -Basic problem solving skills;
    -Basic JavaScript coding skills;
    -Basic debugging skills;


########################################################

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
 
 ============================================

 UI-VERSION GOALS:

 #HTML

- Add 3 buttons for each selection (Rock, paper and scissors);
- Add a div to show the total score;
- Add a div to show the results of a round and the the game;

#HTML --- PSEUDOCODE

- Add a div with class="container";
- Add a child div to the previous div with class="score";
- Add another child div with class="results";
- Add another child div with class="button-container";
- Add 3 buttons to the previous div, with classes "btn-rock", "btn-paper" and "btn-scissors", respectively. Put "Rock", "Paper" and "Scissors", respectively, on their content; 

 #JAVASCRIPT

- Plays until someone reaches 5 points;
- Remove the logic that plays exactly five rounds;
- Add an event listener to the buttons and call roundPlay() with the correct userSelection every time a button is clicked;
- Change all console.logs into DOM methods;

#JAVASCRIPT --- PSEUDOCODE

- Remove the console.log(game());
- Remove userPlay();
- Remove game();
- Add a global variable userScore = 0;
- Add a global variable computerScore = 0;

Add function that add an event listener to all the buttons and calls roundPlay() with the correct userSelection;
- Add const buttons array from document.querySelectorAll('button');
- For each button on buttons array add a 'click' event listener that calls roundPlay() with the correct arg. 1 for Rock, 2 for Paper and 3 for Scissors;

Change roundPlay() so that it receives userSelection and plays a round and calls checkVictory() and passes the correct string;
- Remove userSelection variable declaration;
- Add userSelection parameter;
- Change the expressions in return calling checkVictory(string); 

Change checkVictory() to receive a string, print it on the page and increment userScore or computerScore;
- Add const resultSelector = document.querySelector('.results');
- Change "return true" to "return userScore++;
- Change "return false" to "return computerScore++;
- Make the text content in resultSelector = string;
- Calls checkWinner();


Change checkWinner() to print the winner on the page when someone reaches 5 victories;
- Add const scoreSelector = document.querySelector('.score');
- Change the number of victories from 3 to 5;
- Change the return true or false to a declaration that prints the winner in text content of scoreSelector;
- If the winner is not decided make the text content in scoreSelector = `YOU: ${userScore} - COMPUTER: ${computerScore};



