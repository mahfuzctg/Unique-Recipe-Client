import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Chef from "../Chef/Chef";
import Login from "../Login/Login";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
