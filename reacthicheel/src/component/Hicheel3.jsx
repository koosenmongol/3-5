import React, { useState } from "react";
import "../style/Hicheel3.css";
import { IoIosStar } from "react-icons/io";
const Hicheel3 = () => {
  const [tuluw, setTuluw] = useState(true);
  const click = () => {
    setTuluw(!tuluw);
    console.log(tuluw);
  };
  return (
    <div className="container">
      <p>Хичээл 3</p>
      <button
        onClick={click}
        style={{
          background: tuluw ? "red" : "green",
          borderRadius: tuluw ? 10 : 50,
        }}
      >
        Товчлуур
      </button>
      {tuluw && <p>Text</p>}
      <IoIosStar size={100} style={{ fill: tuluw ? "red" : "green" }} />
    </div>
  );
};
export default Hicheel3;
