import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrderDetailService from "../../../services/OrderDetailService";
import OrderService from "../../../services/OrderService";

function AdminOrderDetail() {
  let { id } = useParams();
  let nav = useNavigate();

  const [orderDetail, setOrderDetail] = useState(null);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    getOrderDetailByIdOrder(id);
    getOrder(id);
  }, [id]);

  const getOrder = () => {
    OrderService.getOrderById(id).then((res) => {
      setOrder(res.data);
      //   console.log(res.data);
    });
  };

  const getOrderDetailByIdOrder = () => {
    OrderDetailService.getOrderDetailsByOrderId(id).then((res) => {
      setOrderDetail(res.data);
    });
  };
  const handleUpdate = () => {
    OrderService.updateStatusOrder(id).then((res) => {
      nav("/admin/orders");
    });
  };
  return (
    <div>
      <h1 className="order__title">Order Detail</h1>
      <div className="admin-news__btn">
        <span
          className="btn-link red-btn admin-news__btn-add update__status"
          onClick={handleUpdate}
        >
          Update status
        </span>
      </div>
      <table>
        <th>ID</th>
        <th>Name Product</th>
        <th>Price</th>
        <th>Size</th>
        <th>Qty</th>
        <th>Amount</th>
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
        <span className="shop-order_total">Total: US {order.total}</span>
      </div>
    </div>
  );
}

export default AdminOrderDetail;
