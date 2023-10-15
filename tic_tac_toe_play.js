const { ticTacToe } = require("./tic_tac_toe");

const play = ticTacToe("Yoda", "Vader"); //Change the names of players here 1st - X, 2nd - Y.
// This is to print 3x3 grid for the board
const print = (i, board) => {
  if (i <= 9) {
    if (i === 4 || i === 7) {
      console.log("");
    }
    board[i] ? process.stdout.write(board[i].concat(" ")) : process.stdout.write("_ ");
    print(i + 1, board);
  }
};
// This is to print current status and board. 
const printBoard = (board) => {
  console.log();
  console.log(board[0]);
  console.log();
  print(1, board);
  console.log();
};
// Function to be called with move and player, move needs to be the position to be choosen from 1 to 9. 
const myTurn = (player, move) => {
    [result, boardOrMessage] = play(player, move);

    if (result) {
      printBoard(boardOrMessage);
    } else {
      console.log(boardOrMessage);
    }
}

// START
myTurn("X",1); 

