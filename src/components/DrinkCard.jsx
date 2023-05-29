import React from "react";

function DrinkCard({ name, description, image, price }) {
  const imagePath = `/assets/${image}`;
  return (
    <div className="card">
      <img src={imagePath} alt="empty" className="card-img" />
      <div className="card-body">
        <h1 className="product-name">{name}</h1>
        <h3 className="product-description">{description}</h3>
        <p className="product-price">${price}</p>
        <button className="btn-tocart">Add to cart</button>
      </div>
    </div>
  );
}

export default DrinkCard;
