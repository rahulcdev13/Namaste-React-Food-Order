import { useState } from 'react';
import Board from './Board';
import ScoreBoard from './ScoreBoard';

function TikTokGame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsPlaying, setxIsPlaying] = useState(true)
  const [xScore, setXScore] = useState(0)
  const [oScore, setOScore] = useState(0)
  const [gameOver, setGameOver] = useState(false);
  const [tie, setTie] = useState(0)


  const WIN_CONDITIONS = [
    [0, 1, 2],
    [0, 4, 9],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const handleBoardClick = (boxId) => {
    const updatedBoard = board.map((value, id) => {
      if (id === boxId) {
        return xIsPlaying === true ? "X" : "O";
      } else {
        return value
      }
    })
    console.log("updated", updatedBoard[0]);
    setBoard(updatedBoard)
    setxIsPlaying(!xIsPlaying)
    const Winner = checkWinner(updatedBoard)

    if (Winner) {
      if (Winner === "X") {
        setXScore(xScore + 1)
        setGameOver(true)
      } else {
        setOScore(oScore + 1)
        setGameOver(true)
      }
    }

    let filled = true;
    updatedBoard.map((item) => {
      if (item === null) {
        filled = false
      }
    });
    if (filled && Winner !== "X" && Winner !== "O") {
      filled = true;
      setTie(tie + 1)
      setGameOver(true)
    }
  }
  const reset = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null));
  }
  const restartGame = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null));
    setOScore(0)
    setXScore(0)
    setTie(0)
  }

  const checkWinner = (updatedBoard) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i]; // [1,2,3] 
      if (updatedBoard[x] && updatedBoard[x] === updatedBoard[y] && updatedBoard[y] === updatedBoard[z]) {
        console.log('Your are Winner');
        return updatedBoard[x]
      }
    }
  }


  return (
    <div className="App">
      <ScoreBoard tie={tie} xScore={xScore} oScore={oScore} Whoplaying ={xIsPlaying} />
      <Board board={board} onClick={gameOver === true ? reset : handleBoardClick} />
      <button className='btn btn-warning mx-2' onClick={restartGame}> Restart Game</button>
      <button className='btn btn-success' onClick={reset}> Play Again</button>
    </div>
  );
}

export default TikTokGame;
