/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./CardItemCart.css";

function CardItemCart({ data }) {
  const { cart, setCart } = useContext(CartContext);

  const increase = () => {
    cart.map((item) => {
      if (
        item.product.id === data.product.id &&
        item.size.id === data.size.id
      ) {
        return item.quantity++;
      }
    });
    setCart([...cart]);
  };

  const decrease = () => {
    cart.map((item) => {
      if (
        item.product.id === data.product.id &&
        item.size.id === data.size.id
      ) {
        if (item.quantity > 1) return item.quantity--;
      }
    });
    setCart([...cart]);
  };

  const removeCart = () => {
    cart.splice(
      cart.findIndex(
        (item) =>
          item.product.id === data.product.id && item.size.id === data.size.id
      ),
      1
    );
    setCart([...cart]);
  };

  return (
    <div className="cart-item-cart__wrap">
      <div className="cart-item-cart__container">
        <img src={data.product.image} alt={data.product.name}></img>
        <div className="cart-item-cart__div_info">
          <span className="cart-item-cart__info_title">
            {data.product.name}
          </span>
          <div className="cart-item-cart__div_s_q">
            {/* <select className="cart-item-cart__info_select">
              <option>S</option>
            </select> */}
            <div className="cart-item__quantity">
              <button onClick={decrease}>-</button>
              <h3>{data.quantity}</h3>
              <button onClick={increase}>+</button>
            </div>
            Size: {data.size.name}
          </div>
          <span className="cart-item-cart__info_note">
            This item usually ships within one business day. Please allow an
            extra 3 days for delivery of items with personalisation.
          </span>
        </div>
        <span className="cart-item-cart__price_product">
          US ${data.product.price * data.quantity}
        </span>
        <span className="cart-item-cart__icon_remove" onClick={removeCart}>
          X
        </span>
      </div>
    </div>
  );
}

export default CardItemCart;
