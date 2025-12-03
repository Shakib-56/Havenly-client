import React from "react";
import logo from "./../Navbar/HavenlylLogo.png";
import { Link } from "react-router";

function Navbar() {
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
    </>
  );
  return (
    <div className="max-w-full">
      <div className="navbar max-w-7xl mx-auto px-20 py- bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="text-xl">
            <img src={logo} className="max-w-2xl h-12" alt="Havenly Logo" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-blue-800">Sign In</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
