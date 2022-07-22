/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// import { useState } from "react";
import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ProductDataService from "../../services/ProductDataService";
import SizeDataService from "../../services/SizeDataService";
import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);
function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const [details, setDetails] = useState();
  const [sizes, setSizes] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    getArticle(id);
    getAllSizesOfProduct();
  }, [id]);

  const getAllSizesOfProduct = () => {
    SizeDataService.getAllSizesByProductId(id).then((res) => {
      setSizes(res.data);
      setSelectedSize(res.data[0]);
    });
  };

  const getArticle = (id) => {
    ProductDataService.getProduct(id).then((res) => {
      // console.log(res.data);
      setProduct(res.data);
      let texts = res.data.description.split(".");
      setDetails(texts);
    });
  };

  const addToCart = () => {
    const index = cart.findIndex(
      (item) =>
        item.product.id === product.id && item.size.id === selectedSize.id
    );
    if (index > -1) {
      cart.map((item) => {
        if (
          item.product.id === product.id &&
          item.size.id === selectedSize.id
        ) {
          return item.quantity++;
        }
      });
      setCart([...cart]);
    } else {
      setCart([...cart, { product, quantity: 1, size: selectedSize }]);
    }
  };

  const handleSelectSize = (sizeId) => {
    let index = sizes.findIndex((size) => size.id === sizeId);
    setSelectedSize(sizes[index]);
  };

  // const sizes = ["XL", "XXL", "3XL", "4XL"];
  const counts = [];
  // const [show, setShow] = useState(false);
  for (let index = 1; index < 10; index++) {
    counts.push(index);
  }

  // const handleShowChart = () => setShow(true);
  // const handleClose = () => setShow(false);
  return (
    <>
      {product ? (
        <div className={cx("product__detail__container")}>
          <div className={cx("shop__name__link")}>
            <span>MANCHESTER UNITED</span>
          </div>
          <div className={cx("div__wrapp")}>
            <img src={product.image} alt=""></img>
            <div className={cx("product__detail__infor__warrper")}>
              <span className={cx("product__detail__title")}>
                {product.name}
              </span>
              <span className={cx("product__detail__avai")}>
                Personalisation available
              </span>
              <span className={cx("product__price")}>
                Reduced: {product.price} $
              </span>
              <div className={cx("product__detail__product__size-wrap")}>
                <div className={cx("product__size")}>
                  <span>Size</span>
                  <span className={cx("div__chart")}>SIZE CHART</span>
                </div>
                {sizes && (
                  <div className={cx("product__detail__cate__size")}>
                    {sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => handleSelectSize(size.id)}
                        className={
                          selectedSize.id === size.id ? cx("size__active") : ""
                        }
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                )}
                <div className={cx("product__detail__select__container")}>
                  <div className={cx("div__contain__quanlity")}>
                    <span>Quantity</span>
                    <select>
                      {counts.map((count, index) => (
                        <option key={index} value={count}>
                          {count}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={cx("btn__action__container")}>
                    {/* <button className={cx("btn__action__cus")}>
                      Customise
                    </button> */}
                    <button
                      onClick={addToCart}
                      className={cx("btn__action__add")}
                    >
                      Add to card
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("show__info")}>
                <h3>Shipping</h3>
                <ul>
                  <li>
                    <p>
                      This item usually ships within one business day. Please
                      allow an extra 3 days for delivery of items with
                      personalisation.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={cx("show__info")}>
                <h3>Detail</h3>
                <ul>
                  {details.map((detail, index) => (
                    <li key={index}>
                      <p>{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cx("show__info")}>
                <h3>Description</h3>
              </div>
            </div>
          </div>
          {/* <div className={`div__show__size__chart ${show ? "" : "display"}`}>
        <img src={require("../../assets/images/size-chart.PNG")} alt=""></img>
        <button className={cx("close")} onClick={handleClose}>
          close
        </button>
      </div> */}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default ProductDetail;
