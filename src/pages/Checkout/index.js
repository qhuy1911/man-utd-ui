/* eslint-disable no-useless-escape */
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Shipping.css";
import CartContext from "../../context/CartContext";
import AuthService from "../../services/AuthService";
import OrderService from "../../services/OrderService";
import OrderDetailService from "../../services/OrderDetailService";

function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleForm = (data) => {};
  const { cart, setCart, getTotal } = useContext(CartContext);
  const currentUser = AuthService.getCurrentUser();
  let navigate = useNavigate();

  const handleCheckout = () => {
    let total = getTotal();
    console.log(total);
    OrderService.createOrder(currentUser.id, { total }).then((res) => {
      let orderId = res.data.id;

      cart.forEach((item) => {
        OrderDetailService.createOrderDetail(orderId, item.size.id, {
          quantity: item.quantity,
        });
      });
      navigate("/shop/checkout/success");
      setCart([]);
    });
    // console.log(currentUser);
  };
  return (
    <div className="checkout__wrapper">
      <div className="checkout__container">
        <div className="checkout__title__content">
          <span>Secure Checkout</span>
          <span>Cart: US${getTotal()}</span>
        </div>
        <div className="checkout__info__login">
          <span>Already have an account?</span>
          <span>
            <Link to={"/login"} className="checkout__link">
              LOG IN
            </Link>
            or
            <Link to={"/register"} className="checkout__link">
              REGISTER
            </Link>
          </span>
        </div>
        <div className="checkout__info__shipping">
          <h3>Shipping Address</h3>
          <form className="checkout__form" onSubmit={handleSubmit(handleForm)}>
            <div className="checkout__input">
              <input
                type="text"
                className="form-control"
                placeholder="First Name*"
                {...register("fullName", {
                  required: "Full name is required",
                })}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Last Name*"
                {...register("lastName", {
                  required: "Last name is required",
                })}
              />
            </div>
            {/* valid fullName and lastName */}
            <div className="checkout-error">
              <div>
                {errors.fullName && (
                  <span className="validation-message">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className="checkout-error-right">
                {errors.lastName && (
                  <span className="validation-message">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="checkout__input">
              <input
                type="text"
                className="form-control"
                placeholder="Email*"
                {...register("email", {
                  required: "Email is required",
                  maxLength: {
                    value: 50,
                    message: "Max length is 20 characters",
                  },
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Phone*"
                {...register("phone", {
                  required: "Phone number is required",
                })}
              />
            </div>
            {/* valid email annd phone */}
            <div className="checkout-error">
              <div>
                {errors.email && (
                  <span className="validation-message">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="checkout-error-right">
                {errors.phone && (
                  <span className="validation-message">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div className="checkout__input">
              <input
                type="text"
                className="form-control"
                placeholder="Address*"
                {...register("address", {
                  required: "Address is required",
                })}
              />
            </div>
            {errors.address && (
              <span className="validation-message">
                {errors.address.message}
              </span>
            )}
            <div className="checkout__input">
              <textarea className="form-control" placeholder="Note" />
            </div>
            <button className="chekout__submit" onClick={handleCheckout}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
