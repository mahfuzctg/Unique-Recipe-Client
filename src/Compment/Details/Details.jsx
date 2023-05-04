import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Details = () => {
  const { id } = useParams();
  const details = useLoaderData();
  const {
    name,
    image,
    year_of_experience,
    likes,
    chefDescription,
    number_of_recipes,
    recipe,
  } = details;
  console.log(details);
  return (
    <>
      <Header></Header>
      <div>
        <div className="card w-7/12 mx-auto my-5 lg:card-side bg-white shadow-xl">
          <figure>
            <img src={image} className="w-48" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Favorite</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-96 glass">
        <figure>
          <img src={recipe.recipeItemsImg} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Details;
