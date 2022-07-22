import React from "react";
import { Link } from "react-router-dom";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
import CardItem from "../../components/CardItemCart";

function Cart() {
  return (
    <div className="cart-item__wrap">
      <div className="cart-item__div_left">
        <span>Your Items</span>
        <CardItem />
      </div>
      <div className="cart-item__div_right">
        <div className="cart-item__div_box_total">
          <div className="cart-item__div_total">
            <span>Cart Total</span>
            <span>US $12000</span>
          </div>
          <div className="cart-item__div_btn">
            <Link to={"/shop/checkout"} className="cart-item__btn-checkout">
              <FontAwesomeIcon
                icon={faLock}
                className="cart-item__icon_check"
              />
              Checkout
            </Link>
          </div>
        </div>
        <Link to="/shop" className="cart-item__title_continue">
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
}

export default Cart;
