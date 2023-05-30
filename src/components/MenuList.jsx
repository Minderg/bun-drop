import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

function MenuList() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function addToCart(id) {
    // letar efter produkten med id:t som skickas in i funktionen
    const itemMenu = menu.find((item) => item.id === id);

    if (itemMenu) {
      // skapar ett nytt objekt med alla props
      let item = { name: itemMenu.name, price: itemMenu.price, quantity: 1 };
      // letar efter cart i localstorage, om det inte finns så skapas en tom array
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // lägger till item i cart
      cart.push(item);
      // sparar cart i localstorage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  return (
    <div>
      <div className="items-container">
        {menu.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            addToCart={addToCart}
          />
        ))}
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

export default MenuList;
