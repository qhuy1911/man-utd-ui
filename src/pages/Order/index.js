import React from "react";
import { Link } from "react-router-dom";
import "./Order.css";

function Order() {
  return (
    <div className="shop-order__wrap">
      <div>
        <h1  className="order__title">Your Order</h1>
        <table className="shop-order__table">
          <thead>
            <th>ID Order</th>
            <th>Total</th>
            <th>Date</th>
            <th>Status</th>
            <th>Detail</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>US $12000</td>
              <td>22-7-2022</td>
              <td>Paid</td>
              <td>
                <Link to={"/shop/order-detail"} className="shop_order_link">
                  Show
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Order;
