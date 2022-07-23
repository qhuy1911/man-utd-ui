/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderDetailService from "../../services/OrderDetailService";
import OrderService from "../../services/OrderService";

function OrderDetail() {
  let { id } = useParams();
  const [orderDetail, setOrderDetail] = useState(null);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    getOrderDetailByIdOrder(id);
    getOrder(id);
  }, [id]);

  const getOrder = () => {
    OrderService.getOrderById(id).then((res) => setOrder(res.data));
  };

  const getOrderDetailByIdOrder = () => {
    OrderDetailService.getOrderDetailsByOrderId(id).then((res) => {
      setOrderDetail(res.data);
      console.log(res.data);
    });
  };
  return (
    <div className="shop-order__wrap">
      <div>
        <h1 className="order__title">Order Detail</h1>
        <table className="shop-order__table">
          <thead>
            <th>ID Product</th>
            <th>Name Product</th>
            <th>Price</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Total</th>
          </thead>
          <tbody>
            {orderDetail
              ? orderDetail.map((detail) => {
                  return (
                    <tr key={detail.id}>
                      <td>{detail.product.id}</td>
                      <td>{detail.product.name}</td>
                      <td>US ${detail.product.price}</td>
                      <td>{detail.size.name}</td>
                      <td>{detail.quantity}</td>
                      <td>US ${detail.product.price * detail.quantity}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
        <div className="shop-order__div_total">
          <span></span>
          <span className="shop-order_total">US {order.total}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
