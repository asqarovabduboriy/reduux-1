import React from "react";
import "./Navbar.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import imga from "../../assets/imgs/image.png";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container navbar_wrapper">
          <div className="logo_wrapper">
           <NavLink to={"/"}> <img src={imga} alt="" /></NavLink>
          </div>
          <nav className="navbar">
            <input type="text" placeholder="Search" />
            <div className="icons_wrapper">
              <IoSearch className="icon_search" />
              <FaRegUser className="icon" />
             <NavLink to={'/like'} className="icon">
             <FaRegHeart className="icon" />
             </NavLink>
              <NavLink to={"/cart"} className="icon">
                <FiShoppingCart className="icon" />
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
