import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/AuthProviders";

import { NavLink } from "react-router-dom";

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
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink>
              <Link to="/home">Home</Link>
            </NavLink>
            <li>
              <Link to="/blog" className="justify-between">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <p className="font-bold text-xl p-3">Unique Recipe</p>
      </nav>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            {!user && (
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                onClick={handleLogOut}
              >
                Log In
              </NavLink>
            )}
            {user && (
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                onClick={handleLogOut}
              >
                Log Out
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar items-center">
          {user && <span>{user?.displayName}</span>}
          <div className="w-12 mx-3 rounded-full ring ring-green-500 ring-offset-base-500 ring-offset-2">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
