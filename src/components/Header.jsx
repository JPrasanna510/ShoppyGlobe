import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/Shoppyglobe.png";

function Header() {
  /**Accessing cart items from Redux store, with fallback to empty array */
  const cartItems = useSelector((state) => state.cart?.items || []);
  /**Calculating total number of items in the cart */
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <img src={logo} alt="Logo" className="logo-img"></img>
      <Link to="/" className="app-name">
        ShoppyGlobe
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart"> 🛒Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}

export default Header;
