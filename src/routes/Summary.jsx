import React, { useEffect, useState } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

function Summary() {
  const [randomTime, setRandomTime] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    deliveryTime();
  }, []);

  const deliveryTime = () => {
    const minMinutes = 1;
    const maxMinutes = 60;
    const randomMinutes = Math.floor(
      Math.random() * (maxMinutes - minMinutes + 1) + minMinutes
    );
    setRandomTime(randomMinutes);
  };

  return (
    <div className="summary-container">
      <h2>Tank you for the order at Bun~Drop</h2>
      {randomTime !== null && (
        <h2>Your order will arive in {randomTime} min</h2>
      )}
      {cartItems.map((item) => (
        <div className="card-summary" key={item.id}>
          <p>~ {item.name}</p>
          <p>~ {item.quantity} st</p>
        </div>
      ))}
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

export default Summary;
