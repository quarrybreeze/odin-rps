// function to get computer's choice
function getComputerChoice() {
    const a = Math.floor(Math.random()*3); //generate a random number between 0 and 2
    if (a >= 2) {                           // if it is above 2, return rock
        return "Rock"  
    } else if (a >= 1) {                    // if it is above 1, return paper
        return "Paper"
    } else {
        return "Scissors"                   // if it is above 0, return scissors
    }
}                                           // this works because it will go down the list, so it will never print RockPaperScissors or PaperScissors.

//function to get player's choice
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?").toLowerCase(); //prompt to ask for human input. toLowerCase to make the answer lowercase to resovle bugs.
    return humanChoice;
}

// console.log(getHumanChoice());

let humanScore = 0; // create score 
let computerScore = 0; //create score


//function to start a round
function playRound(humanChoice, computerChoice) {

    computerChoice = getComputerChoice(); //roll dice for computer's choice
    humanChoice = getHumanChoice(); //prompt user for input

    if (humanChoice == "rock") { //results if the human chooses rock.
        if (computerChoice == "Paper") {
            ++computerScore;
            console.log("You lose! Paper beats Rock.");
        } else if (computerChoice == "Rock") {
            console.log("Tie. Both chose Rock.");
        } else if (computerChoice == "Scissors") {
            ++humanScore;
            console.log("You win! Rock beats Scissors.");
        }
    }

    if (humanChoice == "scissors") { //results if human chooses scissors
        if (computerChoice == "Rock") {
            ++computerScore;
            console.log("You lose! Rock beats Scissors.");
        } else if (computerChoice == "Scissors") {
            console.log("Tie. Both chose Scissors.");
        } else if (computerChoice == "Paper") {
            ++humanScore;
            console.log("You win! Scissors beats Paper.");
        }
    }

    if (humanChoice == "paper") { //results if human chooses paper
        if (computerChoice == "Scissors") {
            ++computerScore;
            console.log("You lose! Scissors beats Paper.");
        } else if (computerChoice == "Paper") {
            console.log("Tie. Both chose Paper.");
        } else if (computerChoice == "Rock") {
            ++humanScore;
            console.log("You win! Paper beats Rock.");
        }
    }
}

//function to combine rounds into a game
function playGame() {
    humanScore = 0; // reset score to 0
    computerScore = 0; // reset score to 0

    for (let i = 0; i < 5; i++) { //loop playround 5 times.
        playRound();
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }

    if (humanScore > computerScore) { //calculate the score and declare a winner
        console.log("You win.");
    } else if (computerScore > humanScore) {
        console.log("You lose.")
    } else {
        console.log("Tie Game!")
    }
}

playGame();

