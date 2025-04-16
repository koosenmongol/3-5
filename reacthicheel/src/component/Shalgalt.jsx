import React from "react";
import Onemovie from "./Onemovie";
import "../style/Movie.css";
import avengersImg from "../assets/shalgalt/1.png";
import spidermanImg from "../assets/shalgalt/2.jpg";
import ironmanImg from "../assets/shalgalt/3.jpg";
import thorImg from "../assets/shalgalt/4.png";
import logo1 from "../assets/shalgalt/logo1.jpg";
import logo2 from "../assets/shalgalt/logo2.jpg";
import logo3 from "../assets/shalgalt/logo3.jpg";
import logo4 from "../assets/shalgalt/logo4.jpg";

const Shalgalt = () => {
  const data = [
    {
      image: avengersImg,
      name: "Apple Watch Magnetic Fast Charger to USB-C Cable (1 m) MT0H3FE/A",
      price: "139,900 ₮",
    },
    {
      image: spidermanImg,
      name: "Apple Watch Magnetic Fast Charger to USB-C Cable (1 m) MT0H3FE/A",
      price: "139,900 ₮",
    },
    {
      image: ironmanImg,
      name: "Samsung Galaxy S24 8GB/256GB",
      price: "3,299,900 ₮",
    },
    {
      image: thorImg,
      name: "Huawei Nova 10 SE 8/128Gb",
      price: "1,439,900 ₮",
    },
  ];
  return (
    <div className="container1">
      <div className="menu">
        <p>Ангилал</p>
        <p>Компьютер</p>
        <p id="red">Гар утас</p>
        <p>Samsung</p>
        <p>Apple</p>
        <p>Huawei</p>
        <p>Honor</p>
      </div>
      <div className="product">
        <p>Гар утас</p>
        <div className="brand">
          <p>Брэндүүд:</p>
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
        </div>
        <div className="container">
          {data.map((data) => (
            <Onemovie name={data.name} img={data.image} price={data.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shalgalt;
