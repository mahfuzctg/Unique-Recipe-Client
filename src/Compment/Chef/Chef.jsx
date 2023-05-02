import React from "react";

const Chef = () => {
  return (
    <div>
      <h4>This is chef section</h4>

      <div className="card w-96 bg-white shadow-xl">
        <figure>
          <img
            src="https://i.postimg.cc/yxZYtjwR/young-man-coocking-noodles.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
