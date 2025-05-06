import Board from "./Board.jsx";
import {useState} from "react";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);

    const nextHistory = [...history.splice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  const moves = history.map((squares, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button className="bg-green-300 m-1 p-1 rounded w-100"
                  onClick={() => jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

  return (
    <>
      <div className="flex">
        <div>
          <Board squares={currentSquares}
                 xIsNext={xIsNext}
                 onPlay={handlePlay} />
        </div>

        <div className="bg-gray-300 m-1 rounded p-1">
          <ul>
            {moves}
          </ul>
        </div>
      </div>
    </>
  );
}