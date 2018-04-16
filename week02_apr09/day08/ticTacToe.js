//Given a multidimensional array representing a full TicTacToe board,
//check to see if there is a winner. Return the winning piece(X or O)
//or "No winner".

//ex:
// let board = [
//   ["X", "O", "X"],
//   ["O", "X", "O"],
//   ["O", "O", "X"]
// ];

// X

// let board = [
//   ["X", "O", "O"],
//   ["O", "O", "X"],
//   ["X", "X", "O"]
// ];

// "No winner"

//If you are comfortable with functions you can use them, but you can
//begin to solve this without them. We will continue with this exercise
//later today and tomorrow

// Hint
// Break down the problem into smaller parts
// What are the win conditions?



/* TO DO:
	winning conditions:
	check for three of X or O in a row
	check for three of X or O in the same index
	check for three of X or O diagonally
	check for three fo X or O diagonally the other way
*/

let board1 = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "O", "X"]
];
// X

let board2 = [
  ["X", "O", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"]
];
// "No winner"

function ticTacToe(board) {
	// for loop that loops each row
	for (let row = 0; row < board[0].length; row ++) {
	// if statement that checks for 3 in a row
		if (board[row][0] === board[row][1] && 
				board[row][0] === board[row][2]) {
			return `${board[row][0]} won!`;
		}
	}
	// for loop that loops each column
	for (let col = 0; col < board.length; col++) {
	// if statement that checks for 3 in a column
		if (board[0][col] === board[1][col] && 
				board[0][col] === board[2][col]) {
			return `${board[0][col]} won!`;
		}
	}
	// if statement to check diagonal ELSE if statement to check alternate diagonal
	if (board[0][0] === board[1][1] && 
			board[0][0] === board[2][2]) {
		return board[0][0];
	} else if (board[0][2] === board [1][1] && 
			board [0][2] === board[2][0]) {
		return board[0][2];
	}
	return "No winner."
}

ticTacToe(board1);
ticTacToe(board2);
