import React from "react";
import Chef from "../Chef/Chef";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-red-100 via-white to-pink-100 mb-8">
        <div className="card lg:card-side w-9/12 h-96 mx-auto ">
          <img
            className="p-2 rounded-lg"
            src="https://i.postimg.cc/HWqj4nxV/banner-chef.png"
            alt="Album"
          />
          <div className="card-body ">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className=" justify-center">
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      </div>

      <Chef></Chef>
    </div>
  );
};

export default Home;
