import React from "react";
import Onemovie from "./Onemovie";
import "../style/Movie.css";
import avengersImg from "../assets/movie/avengers.jpg";
import spidermanImg from "../assets/movie/spider-man.jpg";
import ironmanImg from "../assets/movie/ironman.jpg";
import thorImg from "../assets/movie/thor.jpg";

const Movie = () => {
  const data = [
    {
      image: avengersImg,
      name: "The Avengers",
      description: "Superheroes team up to save the world.",
    },
    {
      image: spidermanImg,
      name: "Spider-Man: Into the Spider-Verse",
      description: "An animated adventure with multiple Spider-People.",
    },
    {
      image: ironmanImg,
      name: "Iron man 3",
      description:
        "Iron Man 3 is a 2013 American superhero film based on the Marvel Comics character Iron Man",
    },
    {
      image: thorImg,
      name: "Thor: Love and Thunder",
      description:
        "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    },
  ];
  return (
    <div className="container1">
      <h1>Таньд санал болгох киноны жагсаалт</h1>
      <p>Адал явдалт, тулаант</p>
      <div className="container">
        {data.map((data) => (
          <Onemovie name={data.name} img={data.image} desc={data.description} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
