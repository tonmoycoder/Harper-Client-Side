import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo2.png';
import './Header.css'

const Header = () => {
  return (
    <div className="mt-7 mb-10 max-w-6xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>My reviews</Link>
            </li>
            <li>
              <Link>Add service</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            </ul>
          </div>
          <Link className="h-auto normal-case ">
            <img className="h-28" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link>My reviews</Link>
            </li>
            <li>
              <Link>Add service</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
