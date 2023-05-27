import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Recipes = ({ recipe }) => {
  const [btn, setBtn] = useState(false);
  const {
    id,
    recipeName,
    recipeItemsImg,
    ingredients,
    cooking_method,
    rating,
  } = recipe;

  const handleBtn = () => {
    setBtn(
      Swal.fire({
        title: "Success!",
        text: "Favorite added",
        icon: "success",
        confirmButtonText: "Thank you",
      })
    );

    // setBtn(toast("added"));
  };

  return (
    <div className="card gap-2 glass shadow-2xl text-white">
      <>
        <img className="w-full  rounded-lg" src={recipeItemsImg} alt="car!" />
      </>
      <div className="card-body">
        <p className="card-title">{recipeName}</p>
        <hr />
        <p>
          <span className="font-bold text-xl text-black">Ingredients: </span>
          {ingredients}
        </p>
        <p>
          <span className="font-bold text-xl text-black">Cooking Method: </span>
          {cooking_method}
        </p>
        <p>Rating: {rating.number}</p>
        <div className="card-actions justify-center">
          <div className="text-black font-medium flex gap-2">
            <button onClick={handleBtn} disabled={btn} className="flex btn">
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
