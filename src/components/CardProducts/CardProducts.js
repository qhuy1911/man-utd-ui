import React from "react";
import CardItemProducts from "./CardItemProducts";
import "./CardProducts.css";

function CardProducts() {
  return (
    <div className="cards__product__container">
      <CardItemProducts
        src={require("../../assets/images/ao-man-1.jpg")}
        alt="news"
        price="2500"
        description="Manchester United Home Shirt 2021-22"
        path={"/"}
      />
      <CardItemProducts
        src={require("../../assets/images/ao-man-1.jpg")}
        alt="news"
        price="2500"
        description="Manchester United Home Shirt 2021-22"
        path={"/"}
      />
      <CardItemProducts
        src={require("../../assets/images/ao-man-1.jpg")}
        alt="news"
        price="2500"
        description="Manchester United Home Shirt 2021-22"
        path={`/news-detail/${"Opinion: Erik can revitalise returning loan players"}`}
      />
      <CardItemProducts
        src={require("../../assets/images/ao-man-1.jpg")}
        alt="news"
        price="2500"
        description="Manchester United Home Shirt 2021-22"
        path={`/news-detail/${"Opinion: Erik can revitalise returning loan players"}`}
      />
      <CardItemProducts
        src={require("../../assets/images/ao-man-1.jpg")}
        alt="news"
        price="2500"
        description="Manchester United Home Shirt 2021-22"
        path={`/news-detail/${"Opinion: Erik can revitalise returning loan players"}`}
      />
      <CardItemProducts
        src={require("../../assets/images/ao-man-1.jpg")}
        alt="news"
        price="2500"
        description="Manchester United Home Shirt 2021-22"
        path={`/news-detail/${"Opinion: Erik can revitalise returning loan players"}`}
      />
    </div>
  );
}

export default CardProducts;
