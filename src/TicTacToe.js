import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export function TicTacToe() {
  // tic-tac-toe game
  const { width, height } = useWindowSize();

  //in react we use map for looping in some cases
  //1.to create more gameboxes instead of give <GameBox /> 9 times here created array for looping because map needed array
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);

  //create to maintain the turn system X or O
  const [isXTurn, setIsXTurn] = useState(true);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    //If winning condition present in board then we have a winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is :", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);

  const handleClick = (idx) => {
    console.log(idx);
    console.log(isXTurn ? "X" : "O");
    //if the board is click dont click again part 
    // crete a copy of the board & then update( like updation part) the click
    if (winner === null && !board[idx]) {
      const boardCopy = [...board];
      boardCopy[idx] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      //Toggle Xturn
      setIsXTurn(!isXTurn);
    }
  };
  return (
    <div className="full-game">
      <div className="game-board">
        {winner ? <Confetti width={width} height={height} /> : ""}
        {/* doubt is here why array didn't accept {} ,if it is used the error is map arrow function wants to return a value */}
        {board.map((val, idx) => (
          <GameBox value={val} onPlayerClick={() => handleClick(idx)} />))}
        {/* onplayer click means when a player click the board the data is come rom GameBox->onplayerclick->and handleclick to change the value */}
      </div>
      {/* conditional rendering for from start the winner is no need to show in the window */}
      <div className="game-result">
        {winner ? <h1 style={{ color: "greenyellow" }}>Winner is : {winner} <br /> Congratulation 🤝🤝 </h1> : ""}
        {winner ? <IconButton aria-label="restart" onClick={refreshPage} className="restart-button">
          <RestartAltIcon />  Restart
        </IconButton> : ""}
      </div>
    </div>
  );
}
function refreshPage() {
  window.location.reload(false);
}
function GameBox({ onPlayerClick, value }) {
  //to change the value of the box
  // const [val, setVal] = useState(null)
  ///to change the color of the value
  const styles = { color: value === "X" ? "red" : "skyblue" };
  return (
    <div className="game-box"
      // /*toggle between both the value here onclick is created for step1 */onClick={() => setVal(val === "X" ? "O" : "X")} we don't need the concept when onplayerclick is invoked for changing the Val X or O
      onClick={onPlayerClick}
      style={styles}>
      {value}
    </div>
  );
}
