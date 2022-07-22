import React from "react";

function OrderDetail() {
  return (
    <div className="shop-order__wrap">
      <div>
        <h1 className="order__title">Order Detail</h1>
        <table className="shop-order__table">
          <thead>
            <th>Name Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </thead>
          <tbody>
            <tr>
              <td>Manchester United Home Shirt 2021-22</td>
              <td>US $13000</td>
              <td>1</td>
              <td>US $13000</td>
            </tr>
          </tbody>
        </table>
        <div className="shop-order__div_total">
          <span></span>
          <span className="shop-order_total">US $13000</span>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
