import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import "../style/Raiting.css";
import dislike from "../assets/dislike.png";
import like from "../assets/like.png";
const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [onClick, setOnClick] = useState(true);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const currentRating = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            ></input>
            <IoIosStar
              // className="star"
              size={30}
              color={currentRating <= (hover || rating) ? "gold" : "gray"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <div>
        <button onClick={() => setOnClick(!onClick)}>
          <img
            style={{ width: 50, height: 50 }}
            src={onClick ? like : dislike}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Rating;
