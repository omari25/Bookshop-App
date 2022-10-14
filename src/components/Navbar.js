import { NavLink } from "react-router-dom";
import { BsHeart, BsCartCheck } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Search from "./Search";

function Navbar() {
    return (
      <div className="navbar">
        <div className="navbar-upper-div">
            <h1><NavLink to="/home" exact>The Bookworm<sup>TM</sup></NavLink></h1>
            <Search />
            <div className="app-icons">
                <BsHeart className="the-icon"/> 
                <BsCartCheck className="the-icon"/>
                <AiOutlineUser className="the-icon"/>
            </div>
        </div>
        <div className="navbar-lower-div">
            <h3><NavLink to="/home" exact>All Books</NavLink></h3>
            <h3><NavLink to="/delivery" exact>Delivery Policy</NavLink></h3>
            <h3><NavLink to="/about-us" exact>About Us</NavLink></h3>
            <h3><NavLink to="/contact-us" exact>Contact Us</NavLink></h3>
            <h3><NavLink to="/terms-conditions" exact>Terms and Conditions</NavLink></h3>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  