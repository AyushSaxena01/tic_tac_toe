const {ticTacToe} = require("./tic_tac_toe");

const play = ticTacToe("Sid","Abhinav");

print=(i,board)=>{

    if(i<=9){
        
        if(i === 4 || i === 7){console.log();}
        (board[i]) ? process.stdout.write(board[i].concat(" ")) : process.stdout.write("_ ");
        print(i+1,board);
    }
}
const printBoard = (board) => {

    console.log();
    console.log(board[0]); 
    console.log(); 
    print(1,board);   
    console.log();
        
    }


[result,boardOrMessage] = play("X",1);

if(result){
    printBoard(boardOrMessage);
}
else{
    console.log(boardOrMessage);
}



