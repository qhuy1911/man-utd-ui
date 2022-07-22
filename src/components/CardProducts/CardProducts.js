import CardItemProducts from "./CardItemProducts";
import classNames from "classnames/bind";
import styles from "./CardProducts.module.scss";

const cx = classNames.bind(styles);

function CardProducts({ dataProduct }) {
  return (
    <div className={cx("cards__product__container")}>
      {dataProduct ? (
        <>
          {dataProduct.map((product) => {
            return (
              <CardItemProducts
                key={product.id}
                src={product.image}
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
