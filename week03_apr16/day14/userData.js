'use strict';

let fName = document.querySelector('#fNameInput');
let lName = document.querySelector('#lNameInput');
let NameDisplay = document.querySelector('#nameDisplay');

fName.addEventListener('keyup', function() {
	NameDisplay.innerText = !fName.value && !lName.value
		? '__________'
		: `${fNnname.value} ${lName.value}`;
});

lName.addEventListener('keyup', function() {
	NameDisplay.innerText = !fName.value && !lName.value
		? '__________'
		: `${fName.value} ${lName.value}`;
});


let avgOf = function avgOf(arrOfScores){
	let total = 0;
	for (let i = 0; i < arrOfScores.length; i++) {
		total += parseInt(arrOfScores[i]);
	}
	let avg = total / arrOfScores.length;
	return avg;
}
  
let topOf = function topOf(arrOfScores){
	let topScore = 0
	for (let i = 0; i < arrOfScores.length; i++) {
		if (arrOfScores[i] > topScore) {
			topScore = parseInt(arrOfScores[i]);
		}
	}
	return topScore;
}


class play {
	constructor(arrayOfScores) {
		this.scoreList = arrayOfScores;
		this.averageScore = avgOf(this.scoreList);
		this.topScore = topOf(this.scoreList);
	}
	getScoresList() {
		return this.scoreList;
	}
	getAverageScore() {
		return this.averageScore;
	}
	getTopScore() {
		return this.topScore;
	}
	addScore(score) {
		this.scoreList.push(score);
		this.scoreList = avgOf(this.scoreList);
		return this.getAverageScore();
	}
}


let scoreInput = document.querySelector('#scoreInput');
let addScoreButton = document.querySelector('#addScoreButton');
let avgScoreDisplay = document.querySelector('#avgScore');
let topScoreDisplay = document.querySelector('#topScore');
let result = [];
let scoresDisplay = document.querySelector('#allScores');

addScoreButton.addEventListener('click', function() {
	event.preventDefault();
	result.push(scoreInput.value);
	let newUser = new play(result)
	avgScoreDisplay.innerText = newUser.getAverageScore().toFixed(2);
	topScoreDisplay.innerText = newUser.getTopScore();
	scoresDisplay.innerHTML += scoreInput.value + '<br>';
	scoreInput.value = '';
})