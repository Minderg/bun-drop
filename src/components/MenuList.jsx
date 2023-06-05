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

  function addToLocalStorage(id) {
    // letar efter produkten med id:t som skickas in i funktionen
    const itemMenu = menu.find((item) => item.id === id);

    if (itemMenu) {
      // skapar ett nytt objekt med alla props
      let item = {
        id: itemMenu.id,
        name: itemMenu.name,
        price: itemMenu.price,
        image: itemMenu.image,
        description: itemMenu.description,
        quantity: 1,
      };
      // letar efter cart i localstorage, om det inte finns så skapas en tom array
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const index = cart.findIndex((item) => item.id === id);

      // Kollar om produkten redan finns i carten och plusar på 1, annars så lägger den till den
      if (index !== -1) {
        cart[index].quantity++;
      } else {
        // lägger till item i cart
        cart.push(item);
      }

      // Samt uppdaterar quantity i cart hela tiden
      const updateCart = menu.map((item) => {
        if (index.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setMenu(updateCart);

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
            addToLocalStorage={addToLocalStorage}
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
