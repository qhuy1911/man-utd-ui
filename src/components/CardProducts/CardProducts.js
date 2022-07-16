import React, { useEffect, useState } from "react";
import CardItemProducts from "./CardItemProducts";
import classNames from "classnames/bind";
import styles from "./CardProducts.module.scss";
import ProductDataService from "../../services/ProductDataService";

const cx = classNames.bind(styles);

function CardProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  });

  const getProducts = () => {
    ProductDataService.getAllProducts().then((res) => setProducts(res.data));
  };
  return (
    <div className={cx("cards__product__container")}>
      {products ? (
        <>
          {products.map((product) => {
            return (
              <CardItemProducts
                key={product.id}
                src={require(`../../assets/images/product/${product.image}`)}
                alt="news"
                price={product.price}
                name={product.name}
                path={`/shop/product-detail/${product.id}`}
              />
            );
          })}
        </>
      ) : (
        "isEmpty"
      )}
    </div>
  );
}

export default CardProducts;
