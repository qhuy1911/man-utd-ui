import React from "react";
import { Link } from "react-router-dom";
import "./CardProducts.css";

function CardItemProducts(props) {
  return (
    <div>
      <li className="li_cards">
        <Link className="navLink items__product" to={props.path}>
          <figure>
            <img src={props.src} alt={props.alt}></img>
          </figure>
          <div className="cards__item__product__info">
            <h5>Reduced: {props.price} $</h5>
            <span className="">{props.description}</span>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItemProducts;
