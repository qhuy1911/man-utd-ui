/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import OrderService from "../../services/OrderService";
import "./Order.css";

function Order() {
  const [orders, setOrders] = useState(null);
  const getUser = AuthService.getCurrentUser();

  useEffect(() => {
    getAllOrderByUser();
  }, []);

  const getAllOrderByUser = () => {
    OrderService.getOrderByUserId(getUser.id).then((res) => {
      setOrders(res.data);
    });
  };
  return (
    <div className="shop-order__wrap">
      <div>
        <h1 className="order__title">Your Order</h1>
        {orders ? (
          <table className="shop-order__table">
            <thead>
              <th>ID Order</th>
              <th>Total</th>
              <th>Date</th>
              <th>Status</th>
              <th>Detail</th>
            </thead>
            <tbody>
              {orders.map((order) => {
                const date = new Date(order.orderDate);
                return (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>US ${order.total}</td>
                    <td>
                      {date.getDate() +
                        "-" +
                        (date.getDay() + 1) +
                        "-" +
                        date.getFullYear()}
                    </td>
                    <td>
                      {order.status ? (
                        <span className="status_paid">Paid</span>
                      ) : (
                        <span className="status_unpaid">Unpaid</span>
                      )}
                    </td>
                    <td>
                      <Link
                        to={`/shop/order-detail/${order.id}`}
                        className="shop_order_link"
                      >
                        Show
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="shop-order__table">
            Empty Order, <Link to={"/shop"}>Continue Shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
