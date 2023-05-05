import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
const Recipes = ({ recipe }) => {
  const {
    id,
    recipeName,
    recipeItemsImg,
    ingredients,
    cooking_method,
    rating,
  } = recipe;
  const [btn, setBtn] = useState(false);

  const handleBnt = () => {
    toast.success("Favorite added");
    setBtn(true);
  };
  return (
    <div className="card gap-2 glass shadow-2xl text-white">
      <figure>
        <img className="w-full " src={recipeItemsImg} alt="car!" />
      </figure>
      <div className="card-body">
        <p className="card-title">{recipeName}</p>
        <hr />
        <p>
          <span className="font-bold text-xl text-black">Ingredients: </span>
          {ingredients}
        </p>
        <p>
          <span className="font-bold text-xl text-black">cooking_method: </span>
          {cooking_method}
        </p>
        <p>Rating: {rating.number} </p>
        <div className="card-actions justify-center ">
          <div className="text-black font-medium flex gap-2 ">
            <button onClick={handleBnt} disabled={btn} className="flex btn ">
              Favorite
              <FaRegHeart></FaRegHeart>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
