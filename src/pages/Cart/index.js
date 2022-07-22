import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
import CardItem from "../../components/CardItemCart";
import CartContext from "../../context/CartContext";

function Cart() {
  const { cart, getTotal } = useContext(CartContext);

  const handleCheckout = () => {
    console.log("checkout");
  };

  return (
    <div className="cart-item__wrap">
      <div className="cart-item__div_left">
        <span>Your Items</span>
        {cart.map((item, index) => (
          <CardItem key={index} data={item} />
        ))}
      </div>
      <div className="cart-item__div_right">
        <div className="cart-item__div_box_total">
          <div className="cart-item__div_total">
            <span>Cart Total</span>
            <span>US ${getTotal()}</span>
          </div>
          <button
            className="cart-item__btn-checkout"
            disabled={cart.length !== 0 ? "" : "disabled"}
            onClick={handleCheckout}
          >
            {cart.length !== 0 || (
              <FontAwesomeIcon
                icon={faLock}
                className="cart-item__icon_check"
              />
            )}
            Checkout
          </button>
        </div>
        <Link to="/shop" className="cart-item__title_continue">
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
}

export default Cart;
