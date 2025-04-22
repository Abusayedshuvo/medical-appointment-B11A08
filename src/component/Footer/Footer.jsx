import React from "react";
import logo from "/logo.svg";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="text-center bg-white py-24">
      <img className="mx-auto" src={logo} alt="" />
      <div className="my-8">
        <ul className="flex font-medium gap-10 justify-center">
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/"> My-Bookings </NavLink>
          </li>
          <li>
            <NavLink to="/"> Blogs </NavLink>
          </li>
          <li>
            <NavLink to="/"> Contact Us </NavLink>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
