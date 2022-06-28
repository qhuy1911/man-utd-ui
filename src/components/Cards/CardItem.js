import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap">
            <img
              src={props.src}
              alt={props.alt}
              className="cards__item__img"
            ></img>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.title}</h5>
            <span className="cards__item__text">{props.description}</span>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
