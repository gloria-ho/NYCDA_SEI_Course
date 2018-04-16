let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

// returns 1 of the 3 options in computerChoices
function randomFrom(array) {
	return array[ (Math.floor(Math.random()*3)) ];
}

// determines if playing, then a winner
function checkInput(input, computerChoices) {
	// computer gets a random choice
	let computerChoice = randomFrom(computerChoices);

	// ends the game
	if (input === "quit") {
    	alert("Thanks for playing. Goodbye!");
    	return true;
	
	// if computer === user, then tie  
	} else if (input != "rock" && input != "paper" && input != "scissors") {
		alert("Please select a valid option: rock/paper/scissors");
		return false;

	// check if computer wins
	} else if (computerChoices === input) {
		alert("Tied!");
		return true;

	} else if (computerChoice === "rock" && input === "scissors"){
		alert("Computer wins!");
		return true;

	} else if (computerChoice === "scissors" && input === "paper"){
		alert("Computer wins!");
		return true;

	} else if (computerChoice === "paper" && input === "rock"){
		alert("Computer wins!");
		return true;
	}

	// all other options, user should win 
	alert("User wins!");``
	return true;
}

function start(gameOver, computerChoices) {
  while (!gameOver){
    let playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
	gameOver = checkInput(playerInput, computerChoices);
	} 
}

start(gameOver, computerChoices);  
