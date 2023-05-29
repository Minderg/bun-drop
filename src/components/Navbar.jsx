import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <h1 className="title-name">Bun Drop</h1>
      </Link>
      <Link to="/cart" className="flex-container">
        <AiOutlineShoppingCart size={45} className="cart-icon" />
      </Link>
    </div>
  );
}

export default Navbar;
