//Part 1

//Create a new function named getComputerChoice
function getComputerChoice() {
  //getComputerChoice should randomly return rock, paper, or scissors       using Math.random
  //declare min and max as they're static
  const min = 1;
  const max = 3;
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  //use if statements to exchange numbers for values
  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else if (result === 3) {
    return "scissors";
  }
}


//Part 2

//Create a new function named getHumanChoice
function getHumanChoice() {
  //use prompt method to get user Input
  return prompt("Rock, Paper or Scissors?");
}



//Part 6

//Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

//Create a new function named playGame
function playGame() {
  //Part 3

  //Declaration of global variables
  let humanScore = 0;
  let computerScore = 0;

  //Part 4
  //You will write a function that takes the human and computer player choices as arguments
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    //Write the code for your playRound function to console.log a string value representing the round winner, such as:         “You lose! Paper beats Rock”
    if (humanChoice === "rock" && computerChoice === "rock") {
      return "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      return "You lose! Paper beats Rock!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      return "You win! Rock beats Scissors!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      return "You win! Paper beats Rock!";
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      return "It's a tie!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      return "You lose! Scissors beats Paper!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      return "You lose! Rock beats Scissors!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      return "You win! Scissors beats Paper!";
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      return "It's a tie!";
    } else {
      return "Enter Rock, Paper or Scissors";
    }  
  }

  //Part 6
  //repeat the function 5 times to make a complete game
  for (let i = 0; i < 5; i++) {
    //store human and computer choices in variables
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    //store playRound results in a variable
    let result = playRound(humanSelection, computerSelection);

    //Part 5
    //Increment humanScore and computerScore variables
    if (result.startsWith("You lose")) {
      computerScore++;
    } else if (result.startsWith("You win")) {
      humanScore++;
    } else if (result.startsWith("It's a tie")) {
      console.log("no points added as it's a tie");
    }
  }

  console.log(`Final Score: Computer: ${computerScore}, Human: ${humanScore}`)
 
}

playGame();
