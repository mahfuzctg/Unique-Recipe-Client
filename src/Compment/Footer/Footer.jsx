import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 text-white my-5 rounded-lg">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Unique Recipe</a>
          <a className="link link-hover">Awesome Chef</a>
          <a className="link link-hover">Marketing</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
