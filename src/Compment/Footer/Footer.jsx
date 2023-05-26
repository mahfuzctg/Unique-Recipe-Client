import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer grid grid:cols-1 lg:grid:cols-3 glass text-white my-10  py-2 rounded-lg">
        <div className="mx-auto">
          <span className="footer-title">Services</span>
          <a className="link link-hover">Unique Recipe</a>
          <a className="link link-hover">Awesome Chef</a>
          <a className="link link-hover">Marketing</a>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
