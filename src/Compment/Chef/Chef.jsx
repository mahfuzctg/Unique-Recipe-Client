import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Chef = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  });
  return (
    <>
      <h1 className="text-center py-3 text-2xl font-bold">Our Special Chef:</h1>
      <div className="grid grid-rows-2 grid-cols-3 gap-4">
        {chefs.map((chef) => (
          <div key={chef.id}>
            <div className="card w-82 bg-gradient-to-b from-blue-400 via-purple-600 to-pink-500">
              <figure className=" rounded-lg">
                <img
                  src={chef.chef_picture}
                  className="h-52 w-full p-3"
                  alt=""
                />
              </figure>
              <div className="card-body text-white">
                <h1 className="font-bold">Name: {chef.chef_name}</h1>
                <p>Experience: {chef.years_of_experience} Year</p>
                <p>Recipe: {chef.num_recipes}</p>
                <p className="text-info font-medium">Like: {chef.likes}</p>
                <div className="card-actions justify-end">
                  <Link className="badge badge-outline">View Recipes</Link>
                  <Link className="badge badge-outline">Chef's Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Chef;
