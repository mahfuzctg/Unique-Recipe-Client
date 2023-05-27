import React from "react";
import Chef from "../Chef/Chef";
import { Link } from "react-router-dom";
import About from "../About/About";
import Review from "../Review/Review";
import dynamicTitle from "../../DynamicHook/DynamicTitle";

const Home = () => {
  dynamicTitle(`Home`);
  return (
    <>
      <div className="rounded-lg">
        <div className="card lg:card-side lg:w-11/12 h-auto align-middle ">
          <img
            className="p-2 rounded-lg w-full sm:h-11/12"
            src="https://i.postimg.cc/HWqj4nxV/banner-chef.png"
            alt="Album"
          />
          <div className="card-body  my-6">
            <h2 className="w-72 h-auto font-bold text-2xl">
              Welcome to unique recipe!
            </h2>
            <p className="text-white font-medium">
              Authentic and Unique Recipes from the Heart of dhaka bangladesh on
              Our Website
            </p>

            <Link
              className="glass shadow-2xl no-underline text-center font-bold text-2xl p-2 rounded-lg text-white"
              to="/login"
            >
              Login Here
            </Link>

            <Link
              className="glass shadow-2xl no-underline  text-center font-bold text-2xl p-2 rounded-lg text-white"
              to="/resister"
            >
              Resister Here
            </Link>
          </div>
        </div>
      </div>
      <>
        <About></About>
      </>
      <>
        <Chef></Chef>
      </>
      <>
        <Review></Review>
      </>
    </>
  );
};

export default Home;
