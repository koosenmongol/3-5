import React, { useState } from "react";
import "../style/Memorygame.css";
const Memorygame = () => {
  const [boxes, setBoxes] = useState([
    "🎀",
    "🐱",
    "🐭",
    "🐶",
    "💕",
    "🔥",
    "🐉",
    "❄️",
    "🎀",
    "🐱",
    "🐭",
    "🐶",
    "💕",
    "🔥",
    "🐉",
    "❄️",
  ]);
  const [zuwtaasan, setZuwtaasan] = useState([]);
  const [boxclicked, setBoxclicked] = useState([]);
  const handleClick = (i) => {
    if (boxclicked.length < 2) {
      let newboxclicked = [...boxclicked, i];
      setBoxclicked(newboxclicked);
      checker(newboxclicked);
    }
  };
  const checker = (boxclicked) => {
    if (boxclicked.length === 2) {
      const boxindex0 = boxclicked[0];
      const boxindex1 = boxclicked[1];
      if (boxes[boxindex0] === boxes[boxindex1]) {
        setZuwtaasan([...zuwtaasan, boxes[boxindex0]]);
        setBoxclicked([]);
        console.log("Taasan");
      } else {
        setTimeout(() => {
          setBoxclicked([]);
        }, 1000);
      }
    }
  };
  return (
    <div className="container">
      <div className="game">
        {boxes.map((box, i) => (
          <div className="box" onClick={() => handleClick(i)}>
            {boxclicked.includes(i) || zuwtaasan.includes(box) ? box : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memorygame;
