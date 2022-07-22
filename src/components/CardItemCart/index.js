import React from "react";
import CardItemCart from "./CardItemCart";
import "./CardItemCart.css";

function CardItem() {
  return (
    <div className="cart-item-container">
      <CardItemCart
        src="http://localhost:8080/api/v1/files/manchester-united-home-shirt-2021-22-long-sleeve.jpg"
        price="12000"
        title="Manchester United Away Authentic Shirt 2022-23"
      />
    </div>
  );
}

export default CardItem;
