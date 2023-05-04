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
    <div>
      <div className="card grid glass w-82 bg-gradient-to-b from-blue-400 via-purple-600 to-pink-500">
        <figure className=" rounded-lg">
          <LazyLoadImage
            src={image}
            effect="blur"
            className="h-52 w-full p-3"
            alt="Image Alt"
          />
          ;
        </figure>
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
            <Link
              to={`/details/${card.id}`}
              className="badge btn bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 badge-outline"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
