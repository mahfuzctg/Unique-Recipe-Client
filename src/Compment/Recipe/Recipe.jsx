import React from "react";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Recipe = () => {
  return (
    <div>
      <Header></Header>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://i.postimg.cc/J478PSyX/recipe-2.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Recipe;
