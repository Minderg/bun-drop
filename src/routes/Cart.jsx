import React, { useState, useEffect } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  function deleteProduct(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function decreaseQuantity(id) {
    updateCart(id, "subtract");
  }

  function increaseQuantity(id) {
    updateCart(id, "add");
  }

  function updateCart(id, operator) {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        let quantity =
          operator === "add" ? item.quantity + 1 : item.quantity - 1;
        if (quantity < 1) {
          quantity = 1;
        }

        let price = item.price;
        if (operator === "add" && item.quantity > 0) {
          price *= 1;
        }
        return { ...item, quantity, totalprice: Math.floor(quantity * price) };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function calculateTotalPrice() {
    return cartItems.reduce((total, item) => total + item.totalprice, 0);
  }

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cartItems]);

  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div className="card-cart" key={item.id}>
          <p>{item.name}</p>
          <span>|</span>
          <p>{item.price}$</p>
          <span>|</span>
          <em>{item.quantity}st</em>
          <span>|</span>
          <p>{item.totalprice}$</p>
          <button
            className="delete-btn"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>
          <button className="add-btn" onClick={() => increaseQuantity(item.id)}>
            +
          </button>
          <HiOutlineTrash
            size={30}
            className="trash-can"
            onClick={() => deleteProduct(item.id)}
          />
        </div>
      ))}
      <div className="totalprice">
        <h2>TotalPrice: {totalPrice}$</h2>
      </div>
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
