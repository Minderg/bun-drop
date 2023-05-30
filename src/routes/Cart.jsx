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
    <div>
      {cartItems.map((index) => (
        <div style={{ color: "white" }} key={index}>
          <h2>{index.name}</h2>
          <p>{index.price}</p>
          <p>{index.description}</p>
          <p>{index.quantity}</p>
        </div>
      ))}
      <div>
        <button>Checkout</button>
      </div>
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
