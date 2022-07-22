/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardProducts from "../../components/CardProducts/CardProducts";
import CategoryDataService from "../../services/CategoryDataService";
import classNames from "classnames/bind";
import styles from "./Shop.module.scss";
import ProductDataService from "../../services/ProductDataService";

const cx = classNames.bind(styles);

function Shop() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState();
  const [activePage, setActivePage] = useState(1);

  const [number, setNumber] = useState(1);
  const perPage = 9;

  const lastPage = number * perPage; //index product first
  const firstPage = lastPage - perPage; //index product last
  const currentProducts = products.slice(firstPage, lastPage);
  const pageNumber = [];

  const handleChangePage = (num) => {
    setActivePage(num);
    setNumber(num);
    console.log(num);
  };

  for (let i = 1; i <= Math.ceil(products.length / perPage); i++) {
    pageNumber.push(i);
  }
  useEffect(() => {
    getAllCategories();
    getProducts();
  }, []);

  const getAllCategories = () => {
    CategoryDataService.getAllCategories().then((res) =>
      setCategories(res.data)
    );
  };

  const getProducts = () => {
    ProductDataService.getAllProducts().then((res) => {
      setProducts(res.data);
    });
  };

  const handleSelectByCate = (id) => {
    setActive(id);
    setActivePage(1);
    setNumber(1);
    ProductDataService.getProductByCategory(id).then((res) => {
      setProducts(res.data);
    });
  };

  // const handleSortProduct = (value) => {
  //   console.log(value);
  //   ProductDataService.getProductOrderbyPrice().then((res) =>
  //     setProducts(res.data)
  //   );
  // };
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
                  <li
                    className={active === categorie.id ? cx("active_cate") : ""}
                    key={categorie.id}
                    onClick={() => handleSelectByCate(categorie.id)}
                  >
                    <span>{categorie.name}</span>
                  </li>
                ))
              : ""}
          </ul>
        </div>
        <div className={cx("shop__show__container")}>
          <div className={cx("shop__show__count")}>
            <div className={cx("shop__show__count_wrap")}>
              <span>1 - 9 of {products.length}</span>
              <select className={cx("select")}>
                <option value="default">Top Sellers</option>
                <option value="desc">Lowest Price</option>
              </select>
            </div>
            <div className={cx("div__page")}>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={cx("icon__cross")}
                    onClick={() => {
                      setNumber(number - 1);
                    }}
                  />
                </li>
                {pageNumber.map((num, index) => (
                  <li
                    key={index}
                    className={activePage === num ? cx("active") : ""}
                    onClick={() => handleChangePage(num)}
                  >
                    <a href="#">{num}</a>
                  </li>
                ))}
                <li>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={cx("icon__cross")}
                    onClick={() => {
                      setNumber(number + 1);
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
          <>{products ? <CardProducts dataProduct={currentProducts} /> : ""}</>
        </div>
      </div>
    </>
  );
}

export default Shop;
