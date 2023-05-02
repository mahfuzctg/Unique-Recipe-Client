import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Compment/Main/Main.jsx";
import Home from "./Compment/Home/Home.jsx";
import Login from "./Compment/Login/Login.jsx";
import Blog from "./Compment/Blog/Blog.jsx";
import Recipe from "./Compment/Recipe/Recipe.jsx";
import Chef from "./Compment/Chef/Chef.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "chef",
    element: <Chef></Chef>,
    children: [
      {
        path: ":id",
        element: <Recipe></Recipe>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
