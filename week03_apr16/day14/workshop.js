// create a class: circle
// one data attribute: radius
// two methods: getArea, getCircumfrence

// class circle {
//   constructor(radius) {
//     this.getArea = (3.14 * radius ** 2);
//     this.getPerimeter = ( 2 * 3.14 * radius);
//   }
// }

// let myCircle1 = new circle(4);
// console.log(myCircle1.getArea);
// console.log(myCircle1.getPerimeter);

class circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return 3.14 * this.radius ** 2;
  }
  getPerimeter() {
    return 3.14 * this.radius * 2;
  }
}

let myCircle = new circle(4);
console.log(myCircle.getArea());
console.log(myCircle.getPerimeter());


// create a class: rectangle
// two data attributes: width, height
// two methods: getArea, getPerimeter

// class rectangle {
// 	constructor(width, height) {
// 		this.getArea = width * height;
// 		this.getPerimeter = ((width * 2) + (height * 2));
// 	}
// }

// let myRectangle1 = new rectangle(2,4);
// console.log(myRectangle1.getArea);
// console.log(myRectangle1.getPerimeter);

class rectangle {
	constructor(width, height) {
    this.width = width;
    this.height = height;
	}
	getArea() {
	  return this.width * this.height;
	}
	getPerimeter() {
	  return this.width * 2 + this.height * 2;
	}
}

let myRectangle1 = new rectangle(2,4);
console.log(myRectangle1.getArea());
console.log(myRectangle1.getPerimeter());


// create a class: student
// data attributes: fName, lName, assignmentScores[], averageScore, topScore
// methods: getFullName(), addScore(score), removeScore(score)

let avgOf = function avgOf(arrOfScores){
  let total = 0;
  for (let i = 0; i < arrOfScores.length; i++) {
    total += arrOfScores[i];
  }
  let avg = total / arrOfScores.length;
  return(`The average score is ${avg}`);
}
  
let topOf = function topOf(arrOfScores){
  topScore = 0
  for (i = 0; i < arrOfScores.length; i++) {
    if (arrOfScores[i] > topScore) {
      topScore = arrOfScores[i];
    }
  }
  return(`The top score is ${topScore}`);
}

class student {
  constructor(firstName, lastName, arrayOfScores) {
    this.fName = firstName;
    this.lName = lastName;
    this.assignmentScores = arrayOfScores;
    this.averageScore = avgOf(this.assignmentScores);
    this.topScore = topOf(this.assignmentScores);
  }
  getFullName() {
    return 'Full name is ' + this.fName + ' ' + this.lName;
  }
  getAssignmentScores() {
    return 'Assignment scores are: ' + this.assignmentScores;
  }
  getAverageScore() {
    return this.averageScore;
  }
  getTopScore() {
    return this.topScore;
  }
  addScore(score) {
    this.assignmentScores.push(score);
    return this.getAverageScore();
  }
  removeScore(score) {
    this.assignmentScores.splice(this.assignmentScores.indexOf(score), 1);
    return this.getAverageScore();
  }
}


let scores1 = [10, 20, 30, 40, 50, 60];
let student1 = new student('Gloria', 'Ho', scores1);


// console.log(student1.getFullName());
// console.log(student1.getAssignmentScores());
// console.log(student1.getAverageScore());
// console.log(student1.getTopScore());

console.log('Adding 1000 ::: ' + student1.addScore(1000));
// 172...
console.log(scores1);
// console.log('Removing 50 ' + student1.removeScore(50));
// 193...
// console.log(scores1);


