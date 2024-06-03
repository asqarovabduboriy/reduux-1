import React from "react";
import "./Navbar.css"; 
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import imga  from '../../assets/imgs/image.png'




const Navbar = () => {
 
  return (
    <>
    <header>
      <div className="container navbar_wrapper">
        <div className="logo_wrapper">
            <img src={imga} alt="" />  
        </div>
        <nav className="navbar">
             <input type="text" placeholder="Search" />
             <div className="icons_wrapper">
             <IoSearch className="icon_search" />
             <FaRegUser className="icon" />
             <FaRegHeart className="icon" />
             <FiShoppingCart className="icon" />
             </div>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Navbar;
