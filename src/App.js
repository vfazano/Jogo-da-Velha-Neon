import React, { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState([
    "", "", "",
    "", "", "",
    "", "", ""
  ]);

  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");

  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function play(index) {
    if (board[index] !== "" || winner !== "") {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = turn;

    setBoard(newBoard);

    for (let combination of combinations) {
      const a = combination[0];
      const b = combination[1];
      const c = combination[2];

      if (
        newBoard[a] !== "" &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a]);
        return;
      }
    }

    if (newBoard.every((item) => item !== "")) {
      setWinner("EMPATE");
      return;
    }

    setTurn(turn === "X" ? "O" : "X");
  }

  function restart() {
    setBoard([
      "", "", "",
      "", "", "",
      "", "", ""
    ]);

    setTurn("X");
    setWinner("");
  }

  return (
    <div className="game">
      <div className="game-container">

        <h1>JOGO DA VELHA</h1>

        <p className="subtitle">
          BATALHA NEON
        </p>

        <div className="status">
          {winner === ""
            ? "Vez do jogador " + turn
            : winner === "EMPATE"
            ? "🤝 EMPATE!"
            : "🏆 Jogador " + winner + " venceu!"}
        </div>

        <div className="board">
          {board.map((value, index) => (
            <button
              key={index}
              className={"cell " + value}
              onClick={() => play(index)}
            >
              {value}
            </button>
          ))}
        </div>

        <button
          className="restart"
          onClick={restart}
        >
          🔄 NOVA PARTIDA
        </button>

      </div>
    </div>
  );
}

export default App;