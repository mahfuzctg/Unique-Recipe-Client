import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, image, likes, name, year_of_experience } = card;
  console.log(card);
  return (
    <div>
      <div className="card grid  w-82 bg-gradient-to-b from-blue-400 via-purple-600 to-pink-500">
        <figure className=" rounded-lg">
          <img src={image} className="h-52 w-full p-3" alt="" />
        </figure>
        <div className="card-body text-white">
          <h1 className="font-bold">Name: {name}</h1>
          <p>{year_of_experience} Year</p>
          <p>Recipe: {card.num_recipes}</p>
          <p className="text-info font-medium">Like: {likes}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${card.id}`} className="badge badge-outline">
              View Recipes
            </Link>
            <Link className="badge badge-outline">Chef's Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
