import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./CardProducts.module.scss";

const cx = classNames.bind(styles);

function CardItemProducts(props) {
  return (
    <div>
      <li className={cx("li_cards")}>
        <Link className={cx("items__product")} to={props.path}>
          <figure>
            <img src={props.src} alt={props.alt}></img>
          </figure>
          <div className={cx("cards__item__product__info")}>
            <h5>Reduced: {props.price} $</h5>
            <span>{props.description}</span>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItemProducts;
