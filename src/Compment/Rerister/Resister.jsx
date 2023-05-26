import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { authContext } from "../Providers/AuthProviders";
import dynamicTitle from "../../DynamicHook/DynamicTitle";

const auth = getAuth(app);

const Resister = () => {
  dynamicTitle(`Register`);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser } = useContext(authContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setError("");
        toast.success("Successfully Registered!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setSuccess("");
        toast.error(error.message);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setError("");
        toast.success("Successfully Registered!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setSuccess("");
        toast.error(error.message);
      });
  };
  const handleResister = (event) => {
    event.preventDefault();
    setSuccess("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const url = event.target.url.value;
    console.log(name, email, password, url);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("Successfully Registered!");
        event.target.reset();
        updateUserData(result.user, name);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setSuccess("");
        toast.error(error.message);
      });
  };

  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        console.log(error);
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
            type=""
            name="name"
            placeholder="Type Your Name"
            required
            className="input input-bordered w-full bg-white text-black"
          />

          <label className="label">
            <span className="label-text ">Type Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Type Your Email"
            required
            className="input input-bordered w-full bg-white text-black"
          />
          <label className="label">
            <span className="label-text">Type Your Password</span>
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Type Your Password"
            required
            className="input input-bordered w-full bg-white text-black "
          />
          <p onClick={() => setShow(!show)}>
            <small className="p-2 font-bold">
              {show ? <span>Hide</span> : <span>Show</span>}
            </small>
          </p>
          <br />
          <input
            className="input input-bordered w-full bg-white text-black "
            type="url"
            name="url"
            id="url"
            placeholder="Press URL"
          />
          <br />

          <input
            className="bg-gradient-to-b from-blue-600 via-purple-300 to-pink-400  text-center font-bold text-2xl p-2 rounded-lg"
            type="submit"
            value="Register"
          />

          <div className="mx-auto ">
            <button
              className="bg-gradient-to-b from-blue-600 via-purple-300 to-pink-400  my-2 rounded-lg font-bold mr-2 "
              onClick={handleGoogleSignIn}
            >
              <FaGoogle className="h-6 w-8 rounded-lg text-green-700" />
            </button>
            <button
              className="bg-gradient-to-b from-blue-600 via-purple-300 to-pink-400 my-2 rounded-lg font-bold  mx-auto"
              onClick={handleGithubSignIn}
            >
              <FaGithub className="h-6 w-8  rounded-lg text-white" />
            </button>
          </div>
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
