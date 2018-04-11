/* Calculator Function
Make a function that takes in a word, and two numbers. The supported words would be “add”, “subtract”, “multiply” & “divide”. This function should perform the appropriate calculator action on the numbers and return the answer. Your calculator function should work for all of the following examples.
*/

function calculator(word, x, y) {
	if (word === 'add') {
		return x + y;
	} else if (word === 'subtract') {
		return x - y;
	} else if (word === 'multiply') {
		return x * y;
	} else {
		return x / y;
	}
}

var  answer = calculator( "add", 4, 2);
console.log(answer);  // 6
answer = calculator( "subtract", 4, 2);
console.log(answer);  // 2
answer = calculator( "divide", 4, 2);
console.log(answer);  // 2
answer = calculator( "multiply", 4, 2);
console.log(answer);  // 8

/*
Kardashian Quiz
Let’s build a simple quiz program, this is the perfect use of a function to take care of the repetitive task of reading from a collection of questions. First off you should build a function that takes in a question and an answer then returns 1 or 0 depending on if the person got it right.
You can make use of the  prompt  function in JavaScript to get user input. Here’s some starter code:
*/

function ask(question, answer){
	let userAns = prompt(question);
	if (userAns === answer) {
		return 1;
	} else {
		return 0;
	}
}

var point = ask("Is Kim the best?", "true");
console.log(point);

/* Create an array of questions and an array of answers.
Use a loop to ask the user questions.
Keep a running total of the user's score.
*/

var questions = [
 "Was Kim born in 1985?" ,
 "Will Rob get out of jail?" ,
 "Does North seem happy?" ,
 "Kanye released 'Heartless' in 2008?" ];
var  answers = [  "yes" ,
 "no" ,  "no" ,  "yes" ];

function askQues(questions, answers){
	let score = 0;
	for (i = 0; i < questions.length; i++) {
		let userAnswer = prompt(questions[i]);
		if (userAnswer === answers[i]) {
			score += 1;
		} else score += 0;
	}
	console.log(score);
	alert(`Your final score is ${score}!`);
}

askQues(questions, answers);



