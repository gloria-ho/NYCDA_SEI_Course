// define the Student class
class Student {
    constructor(myFirstName, myLastName) {
        // define the properties the student will have
        this.firstName = myFirstName;
        this.lastName = myLastName;
        this.assignmentScores = [];
        this.averageScore = 0;
        this.topScore = 0;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    addScore(score) {
        // add the new score to the array
        this.assignmentScores.push(score);

        // call the function to update the average and topScore
        this.updateAverageAndTopScore();
    }

    removeScore(scoreToRemove) {
        // find the index of the score to remove
        let indexToRemove = this.assignmentScores.indexOf(scoreToRemove);
        // call the splice method passing in the index
        this.assignmentScores.splice(indexToRemove, 1);

        // call the function to update the average and topScore
        this.updateAverageAndTopScore();
    }

    updateAverageAndTopScore() {
        // declare variables to hold the running sum and highest score
        let sum = 0;
        let highestScore = this.assignmentScores[0];

        for (let i = 0; i < this.assignmentScores.length; i++) {
            // in the for loop we will add the sum and check the highest value
            sum = sum + this.assignmentScores[i];
            if (this.assignmentScores[i] > highestScore) {
                highestScore = this.assignmentScores[i];
            }
        }

        // update the average score and topScore after the loop finishes.
        this.averageScore = sum / this.assignmentScores.length;
        this.topScore = highestScore;
    }
}