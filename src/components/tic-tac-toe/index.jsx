import { useState, useEffect } from "react";
import "./styles.css";

const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState("");

  const handleClick = (index) => {
    let newSquares = [...squares];
    if (getWinner(newSquares) || newSquares[index]) return;
    newSquares[index] = isXNext ? "X" : "O";
    setIsXNext(!isXNext);
    setSquares(newSquares);
  };

  const handleRestart = () => {
    setIsXNext(true);
    setSquares(Array(9).fill(""));
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((square) => square !== "")) {
      setStatus("It's a draw! Please restart the game.");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game.`);
    } else {
      setStatus(`Next turn is ${isXNext ? "X" : "O"}`);
    }
  }, [squares, isXNext]);

  const getWinner = (squares) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winPatterns.length; i++) {
      const [x, y, z] = winPatterns[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }

    return null;
  };

  return (
    <div className="container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
