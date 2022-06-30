import { useState } from "react";
import "./ProductDetail.css";

function ProductDetail() {
  const sizes = ["XL", "XXL", "3XL", "4XL"];
  const counts = [];
  const [show, setShow] = useState(false);
  for (let index = 1; index < 10; index++) {
    counts.push(index);
  }

  const handleShowChart = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="product__detail__container">
      <div className="shop__name__link">
        <span>MANCHESTER UNITED</span>
      </div>
      <div className="div__wrapp">
        <img src={require("../../assets/images/ao-man-1.jpg")} alt=""></img>
        <div className="product__detail__infor__warrper">
          <span className="product__detail__title">
            Manchester United Home Shirt 2021-22
          </span>
          <span className="product__detail__avai">
            Personalisation available
          </span>
          <span className="product__price">Reduced: 25000 $</span>
          <div className="product__detail__product__size-wrap">
            <div className="product__size">
              <span>Size</span>
              <span className="div__chart" onClick={handleShowChart}>
                SIZE CHART
              </span>
            </div>
            <div className="product__detail__cate__size">
              <ul>
                {sizes.map((size, index) => (
                  <li key={size}>
                    <span>{size}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="product__detail__select__container">
              <div className="div__col div__contain__quanlity">
                <span>Quantity</span>
                <select>
                  {counts.map((count, index) => (
                    <option key={index} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </div>
              <div className="div__col btn__action__container">
                <button className="btn__action btn__cus">Customise</button>
                <button className="btn__action btn__add">Add to card</button>
              </div>
            </div>
          </div>
          <div className="show__info">
            <h3>Shipping</h3>
            <ul>
              <li>
                <p>
                  This item usually ships within one business day. Please allow
                  an extra 3 days for delivery of items with personalisation.
                </p>
              </li>
            </ul>
          </div>
          <div className="show__info">
            <h3>Detail</h3>
            <ul>
              <li>
                <p>Product ID: 12052601</p>
              </li>
            </ul>
          </div>
          <div className="show__info">
            <h3>Description</h3>
            <ul>
              <li>
                <p>Product ID: 12052601</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`div__show__size__chart ${show ? "" : "display"}`}>
        <img src={require("../../assets/images/size-chart.PNG")} alt=""></img>
        <button className="btn__action close" onClick={handleClose}>
          close
        </button>
      </div>
    </div>
  );
}
export default ProductDetail;
