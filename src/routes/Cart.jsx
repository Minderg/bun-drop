import React, { useState, useEffect } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartItems);
  }, []);

  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div className="card-cart" key={item.id}>
          <p>{item.name}</p>
          <em>{item.description}</em>
          <p>${item.price}</p>
        </div>
      ))}
      <Link to="/checkout">
        <button className="btn-cart">Checkout</button>
      </Link>
      <div className="footer-container">
        <ul className="flex-container justify-center">
          <li>
            <Link to={"https://www.instagram.com/gabrielminder/"}>
              <AiOutlineInstagram size={45} className="instagram-icon" />
            </Link>
          </li>
          <li>
            <Link to={"https://twitter.com/MinderGabriel"}>
              <AiOutlineTwitter size={45} className="twitter-icon" />
            </Link>
          </li>
          <li>
            <Link to={"https://www.linkedin.com/in/gabriel-minder/"}>
              <AiOutlineLinkedin size={40} className="linkedin-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Cart;
