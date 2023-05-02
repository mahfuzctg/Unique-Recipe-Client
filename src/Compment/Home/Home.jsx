import React from "react";
import Chef from "../Chef/Chef";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-lg">
        <div className="card lg:card-side w-9/12 h-96 align-middle ">
          <img
            className="p-2 rounded-lg"
            src="https://i.postimg.cc/HWqj4nxV/banner-chef.png"
            alt="Album"
          />
          <div className="card-body my-6">
            <h2 className="w-72 h-auto font-bold text-2xl">
              Welcome to unique recipe!
            </h2>
            <p className="text-white font-medium">
              Authentic and Unique Recipes from the Heart of dhaka bangladesh on
              Our Website
            </p>
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>

      <Chef></Chef>
    </div>
  );
};

export default Home;
