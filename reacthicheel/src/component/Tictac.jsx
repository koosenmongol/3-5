import React, { useState } from "react";
import "../style/Tictac.css";
const Tictac = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [winPlayer, setWinPlayer] = useState("");
  const [lastclick, setLastclick] = useState("");
  const [wintuluw, setWintuluw] = useState(false);
  const [tie, setTie] = useState(false);
  const wincheck = () => {
    if (boxes[0] === boxes[1] && boxes[1] === boxes[2] && boxes[0] != "") {
      setWintuluw(true);
      setWinPlayer(boxes[0]);
    } else if (
      boxes[3] === boxes[4] &&
      boxes[5] === boxes[4] &&
      boxes[3] != ""
    ) {
      setWintuluw(true);
      setWinPlayer(boxes[3]);
    } else if (b  && boxes[8] != "" && boxes[7] != "") {
      setTie(true);
      setWintuluw(true);
    }
  };

  const click = (i) => {
    if (boxes[i] === "") {
      const nextValue = lastclick === "X" ? "O" : "X";
      boxes[i] = nextValue;
      setBoxes([...boxes]);
      setLastclick(nextValue);
      console.log(boxes);
      wincheck();
    }
  };
  const gameRestart = () => {
    setBoxes(Array(9).fill(""));
    setWintuluw(false);
  };
  return (
    <div className="container">
      {wintuluw && (
        <div className="winPage">
          {tie ? <h1>TIE</h1> : <h1>Player {winPlayer} win</h1>}
          <button onClick={() => gameRestart()} className="newButton">
            New game
          </button>
        </div>
      )}
      {!wintuluw && (
        <div className="Tictac">
          {boxes.map((box, i) => (
            <button onClick={() => click(i)} className="box">
              <p>{box}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tictac;
