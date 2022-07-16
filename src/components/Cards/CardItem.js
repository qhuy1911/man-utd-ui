import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function CardItem(props) {
  return (
    <>
      <li className={cx("cards__item")}>
        <Link className={cx("cards__item__link")} to={props.path}>
          <figure className={cx("cards__item__pic-wrap")}>
            <img
              src={props.src}
              alt={props.alt}
              className={cx("cards__item__img")}
            ></img>
          </figure>
          <div className={cx("cards__item__info")}>
            <h5 className={cx("cards__item__text")}>{props.title}</h5>
            <span className={cx("cards__item__text")}>{props.description}</span>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
