/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Shop.css";
import CardProducts from "../../components/CardProducts/CardProducts";
function Shop() {
  return (
    <div className="shop__home__container">
      <div className="shop__name__link">
        <span>MANCHESTER UNITED</span>
      </div>
      <div className="shop__show__wrapper">
        <div className="shop__show__category__sidebar">
          <p>Shop for</p>
          <ul>
            <li>
              <span>Men</span>
            </li>
            <li>
              <span>Women</span>
            </li>
            <li>
              <span>Kids</span>
            </li>
            <li>
              <span>Baby</span>
            </li>
          </ul>
        </div>
        <div className="shop__show__container">
          <div className=" shop__name__link shop__show__count">
            <div>
              <span>1 - 72 of 1415</span>
              <select className="select">
                <option>Top Sellers</option>
                <option>Lowest Price</option>
              </select>
            </div>
            <div className="div__page">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCaretLeft} className="icon__cross" />
                </li>
                <li className="active">
                  <a className="navLink a" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a className="navLink a" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a className="navLink a" href="#">
                    3
                  </a>
                </li>
                <li>
                  <a className="navLink a" href="#">
                    4
                  </a>
                </li>
                <li>
                  <a className="navLink a" href="#">
                    5
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="icon__cross"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="shop__show__product">
            <CardProducts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
