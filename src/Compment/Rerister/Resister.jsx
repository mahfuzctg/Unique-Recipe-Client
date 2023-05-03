import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../Firebase/Firebase.config";

const auth = getAuth(app);

const Resister = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleResister = (event) => {
    event.preventDefault();
    setSuccess("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        event.target.reset();
        setSuccess("Successfully Registered!");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="container bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 w-8/12 mx-auto p-5 m-5 rounded-md">
      <h3 className="text-2xl font-bold">PLease Resister Your Account</h3>
      <Form onSubmit={handleResister}>
        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text">Type Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type Your Name"
            required
            className="input input-bordered w-full bg-white "
          />

          <label className="label">
            <span className="label-text">Type Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Type Your Email"
            required
            className="input input-bordered w-full bg-white "
          />
          <label className="label">
            <span className="label-text">Type Your Password</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Type Your Password"
            required
            className="input input-bordered w-full bg-white "
          />
          <br />

          <input
            className="bg-gradient-to-b from-blue-600 via-purple-300 to-pink-400  text-center font-bold text-2xl p-2 rounded-lg"
            type="submit"
            value="Register"
          />
        </div>
      </Form>
      <p className="text-white font-medium">{error}</p>
      <p className="text-white font-medium">{success}</p>

      <p className="font-bold m-2">
        Already Resister ?
        <Link className="text-green-100" to="/login">
          Go to login.
        </Link>
      </p>
    </div>
  );
};

export default Resister;