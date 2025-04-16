import React, { useState } from "react";

const Input = () => {
  const getnumber = () => {
    let number = Math.floor(Math.random() * 101);
    return number;
  };

  const [sanasantoo, setSanasantoo] = useState(getnumber());
  const [inputnumber, setInputnumber] = useState(0);
  const [win, setWin] = useState("");
  const [live, setLive] = useState(5);
  const inputdata = (event) => {
    let data = event.target.value;
    console.log(data);
    console.log(sanasantoo);
    setInputnumber(data);
  };
  const checknumber = () => {
    if (live > 0) {
      if (inputnumber > 100) {
        setWin("1-100 хооронд тоо оруулна уу!");
        setLive(live - 1);
      } else if (inputnumber > sanasantoo) {
        setWin("Их байна");
        setLive(live - 1);
      } else if (inputnumber < sanasantoo) {
        setWin("Бага байна");
        setLive(live - 1);
      } else if (inputnumber == sanasantoo) {
        setWin("Зөв таалаа");
        setLive(0);
      }
    } else if (live == 0) setWin("Хожигдлоо");
  };
  const resetGame = () => {
    setLive(5);
    setSanasantoo(getnumber());
    setWin("");
  };
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Санасан тоо таах тоглоом</h1>
      <h2>Боломжын тоо:{live}</h2>
      <h2>Sanasan too: {sanasantoo}</h2>
      <h2>{win}</h2>
      <input
        style={{ width: 200, height: 100, fontSize: 30 }}
        type="number"
        placeholder="Search"
        onChange={inputdata}
      />
      <button
        style={{
          width: 200,
          height: 100,
          fontSize: 30,
          borderWidth: 1,
          borderColor: "black",
        }}
        onClick={checknumber}
      >
        Таах
      </button>
      {live == 0 && (
        <button
          style={{
            width: 200,
            height: 100,
            fontSize: 30,
            borderWidth: 1,
            borderColor: "black",
          }}
          onClick={resetGame}
        >
          Дахин эхлэх
        </button>
      )}
    </div>
  );
};

export default Input;
