import React from "react";
import CardItemCart from "./CardItemCart";
import "./CardItemCart.css";

function CardItem({ data }) {
  return (
    <div className="cart-item-container">
      <CardItemCart data={data} />
    </div>
  );
}

export default CardItem;
