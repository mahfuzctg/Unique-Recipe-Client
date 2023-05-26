import React from "react";

const Review = () => {
  return (
    <div className="container w-9/12 mx-auto p-4 m-10 bg-gradient-to-b from-blue-400 via-purple-600 to-pink-500 rounded-lg">
      <h1 className="text-center font-bold text-2xl p-2 ">Popular Recipes</h1>
      <div className="carousel w-full h-72 rounded-lg">
        <div id="item1" className="carousel-item w-full h-auto">
          <img
            src="https://i.postimg.cc/PxzGMMTK/recipe-1.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full h-auto">
          <img
            src="https://i.postimg.cc/J478PSyX/recipe-2.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full h-auto">
          <img
            src="https://i.postimg.cc/PxzGMMTK/recipe-3.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-auto">
          <img
            src="https://i.postimg.cc/PxzGMMTK/recipe-4.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Review;
