import React from "react";

function MenuCard({
  id,
  name,
  description,
  image,
  price,
  category,
  addToLocalStorage,
}) {
  const imagePath = `/assets/${image}`;

  return (
    <div className="card">
      <img src={imagePath} alt="empty" className="card-img" />
      <div className="card-body">
        <h2 className="product-name">{name}</h2>
        <h2 className="product-description">{description}</h2>
        <p className="product-category">{category}</p>
        <p className="product-price">${price}</p>
        <button
          className="btn-addtocart"
          onClick={() => {
            addToLocalStorage(id);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
