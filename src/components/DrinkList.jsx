import React, { useState, useEffect } from "react";
import DrinkCard from "./DrinkCard";

function DrinkList() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/drinks")
      .then((r) => r.json())
      .then((data) => setDrinks(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="items-container">
      {drinks.map((drink) => (
        <DrinkCard
          key={drink.id}
          image={drink.image}
          name={drink.name}
          price={drink.price}
          description={drink.description}
        />
      ))}
    </div>
  );
}

export default DrinkList;
