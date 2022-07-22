import React from "react";
import "./CardItemCart.css";

function CardItemCart(props) {
  return (
    <div className="cart-item-cart__wrap">
      <div className="cart-item-cart__container">
        <img src={props.src} alt={props.alt}></img>
        <div className="cart-item-cart__div_info">
          <span className="cart-item-cart__info_title">{props.title}</span>
          <div className="cart-item-cart__div_s_q">
            <select className="cart-item-cart__info_select">
              <option>S</option>
            </select>
            <select className="cart-item-cart__info_select">
              <option>1</option>
            </select>
          </div>
          <span className="cart-item-cart__info_note">
            This item usually ships within one business day. Please allow an
            extra 3 days for delivery of items with personalisation.
          </span>
        </div>
        <span className="cart-item-cart__price_product">US ${props.price}</span>
        <span className="cart-item-cart__icon_remove">X</span>
      </div>
    </div>
  );
}

export default CardItemCart;
