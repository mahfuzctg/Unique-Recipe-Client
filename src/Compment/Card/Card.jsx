import React from "react";
import { Link } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Card = ({ card }) => {
  const { id, image, likes, name, year_of_experience, number_of_recipes } =
    card;
  console.log(card);
  return (
    <div className="card  grid glass">
      <LazyLoadImage
        src={image}
        effect="blur"
        className="h-64 w-full rounded-lg"
        alt="Image Alt"
      />
      <div className="card-body text-white">
        <h1 className="font-bold">Name: {name}</h1>
        <p>{year_of_experience} Year</p>
        <p>Recipe: {number_of_recipes}</p>
        <div className="text-info font-medium flex gap-2 ">
          Likes
          {likes}
          <FaRegThumbsUp></FaRegThumbsUp>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/details/${card.id}`} className="btn glass ">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
