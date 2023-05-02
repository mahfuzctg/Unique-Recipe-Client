import React, { useEffect, useState } from "react";

const Chef = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  });
  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-4">
      {chefs.map((chef) => (
        <div key={chef.id}>
          <div className="card w-82 bg-white shadow-xl  ">
            <figure>
              <img
                src="https://i.postimg.cc/yxZYtjwR/young-man-coocking-noodles.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <h1>{chef.chef_name}</h1>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chef;
