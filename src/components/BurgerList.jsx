import React, { useState, useEffect } from "react";
import BurgerCard from "./BurgerCard";

function BurgerList() {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/burgers")
      .then((r) => r.json())
      .then((data) => setBurgers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="items-container">
      {burgers.map((burger) => (
        <BurgerCard
          key={burger.id}
          image={burger.image}
          name={burger.name}
          price={burger.price}
          description={burger.description}
        />
      ))}
    </div>
  );
}

export default BurgerList;
