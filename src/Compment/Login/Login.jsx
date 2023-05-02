import React from "react";

const Login = () => {
  return (
    <div className="container bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 w-8/12 mx-auto p-5 m-5 rounded-md">
      <h3 className="text-2xl">PLease Login Your Account</h3>
      <div className="form-control w-full  ">
        <label className="label">
          <span className="label-text">Enter Your Email</span>
        </label>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="input input-bordered w-full bg-white "
        />
        <label className="label">
          <span className="label-text">Enter Your Password</span>
        </label>
        <input
          type="text"
          placeholder="Enter Your Password"
          className="input input-bordered w-full bg-white "
        />
      </div>
    </div>
  );
};

export default Login;
