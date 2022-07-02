/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardProducts from "../../components/CardProducts/CardProducts";
import CategoryDataService from "../../services/CategoryDataService";
import classNames from "classnames/bind";
import styles from "./Shop.module.scss";

const cx = classNames.bind(styles);

function Shop() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    CategoryDataService.getAllCategories().then((res) =>
      setCategories(res.data)
    );
  };

  return (
    <>
      <div className={cx("shop__name__link")}>
        <span>MANCHESTER UNITED</span>
      </div>
      <div className={cx("shop__show__wrapper")}>
        <div className={cx("shop__show__category__sidebar")}>
          <p>Shop for</p>
          <ul>
            {categories
              ? categories.map((categorie) => (
                  <li key={categorie.id}>
                    <span>{categorie.name}</span>
                  </li>
                ))
              : ""}
          </ul>
        </div>
        <div className={cx("shop__show__container")}>
          <div className={cx("shop__show__count")}>
            <div className={cx("shop__show__count_wrap")}>
              <span>1 - 72 of 1415</span>
              <select className={cx("select")}>
                <option>Top Sellers</option>
                <option>Lowest Price</option>
              </select>
            </div>
            <div className={cx("div__page")}>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={cx("icon__cross")}
                  />
                </li>
                <li className={cx("active")}>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
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
          <CardProducts />
        </div>
      </div>
    </>
  );
}

export default Shop;
