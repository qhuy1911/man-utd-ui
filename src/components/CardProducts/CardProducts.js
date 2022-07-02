import React from "react";
import CardItemProducts from "./CardItemProducts";
import classNames from "classnames/bind";
import styles from "./CardProducts.module.scss";

const cx = classNames.bind(styles);

function CardProducts() {
  return (
    <div className={cx("cards__product__container")}>
      <CardItemProducts
        src={require("../../assets/images/product/ao-man-1.jpg")}
        alt="news"
        price="2500"
        description="Manchester United Home Shirt 2021-22"
        path={"/shop/product-detail/1"}
      />
      <CardItemProducts
        src={require("../../assets/images/product/ao-man-1.jpg")}
        alt="news"
        price="2500"
        description="Manchester United Home Shirt 2021-22"
        path={"/shop/product-detail/1"}
      />
    </div>
  );
}

export default CardProducts;
