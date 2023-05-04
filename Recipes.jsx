import React from "react";
import { FaRegHeart } from "react-icons/fa";
const Recipes = ({ recipe }) => {
  const { id, recipeName, recipeItemsImg, ingredients, cooking_method } =
    recipe;
  return (
    <div className="card glass  gap-2 bg-gradient-to-b from-blue-400 via-purple-600 to-pink-500 text-white">
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

        <div className="card-actions justify-center ">
          <div className="text-black font-medium flex gap-2 ">
            <button onClick={() => handleFavorite} className="flex ">
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
