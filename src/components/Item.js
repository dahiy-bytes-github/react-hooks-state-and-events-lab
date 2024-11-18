import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  function handleAddToCartClick() {
    setIsInCart(isInCart => !isInCart)
  }
  const inCart = isInCart ? "in-cart" : ""
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart?"remove":"add"} onClick={handleAddToCartClick}>
      {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
