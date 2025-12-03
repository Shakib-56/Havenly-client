import React, { useContext } from "react";
import logo from "./../Navbar/HavenlylLogo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
        // Handle successful sign out if needed
      })
      .catch((error) => {
        // Handle errors if needed
        console.error("Sign out error:", error);
      });
  };
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/rooms">Rooms</Link>
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
        <div className="navbar-center hidden lg:flex lg:flex-row">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          ) : (
            <>
              <div className="space-x-4">
                <NavLink className="btn" to="/register">
                  {" "}
                  Resgister
                </NavLink>
                <NavLink className="btn" to="/signin">
                  {" "}
                  Sign In
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
