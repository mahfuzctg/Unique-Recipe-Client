import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar container lg:mx-auto font-bold glass text-white rounded-lg my-3">
      <nav className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/blog" className="justify-between">
                Blog
              </Link>
            </li>
            <li>{user && <span>Welcome</span>}</li>
          </ul>
        </div>
        <p className="font-bold text-xl p-3">Unique Recipe</p>
      </nav>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            {user && (
              <span>
                {user.email}

                <button
                  className="bg-gradient-to-b from-pink-400 via-purple-100 to-blue-500 text-black  p-1 rounded-lg"
                  onClick={handleLogOut}
                >
                  LogOut
                </button>
              </span>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-12 mx-3 rounded-full ring ring-green-500 ring-offset-base-500 ring-offset-2">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
