import React from "react";

function BurgerCard({ name, description, image, price }) {
  const imagePath = `/assets/${image}`;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={imagePath} alt="empty" />
      <p>{price}</p>
    </div>
  );
}

export default BurgerCard;
