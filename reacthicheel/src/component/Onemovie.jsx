import React from "react";
import Rating from "./Rating";
import "../style/Movie.css";
const Onemovie = ({ name, img, desc }) => {
  return (
    <div className="onemovie">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p style={{ fontSize: 20, height: 200 }}>{desc}</p>
      <Rating />
    </div>
  );
};

export default Onemovie;
