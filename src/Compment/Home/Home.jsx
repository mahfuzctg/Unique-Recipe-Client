import React from "react";
import Chef from "../Chef/Chef";
import { Link } from "react-router-dom";

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

            <Link
              className="bg-gradient-to-b from-blue-600 via-purple-300 to-pink-400  text-center font-bold text-2xl p-2 rounded-lg"
              to="/login"
            >
              Login Here
            </Link>

            <Link
              className="bg-gradient-to-b from-blue-600 via-purple-300 to-pink-400  text-center font-bold text-2xl p-2 rounded-lg"
              to="/resister"
            >
              Resister Here
            </Link>
          </div>
        </div>
      </div>

      <Chef></Chef>
    </div>
  );
};

export default Home;
