import {faPen,faCaretRight,faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderService from "../../../services/OrderService";
import "./AdminOrder.css";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = () => {
    OrderService.getAllOrders().then((res) => {
      setOrders(res.data);
    });
  };
  const [activePage, setActivePage] = useState(1);

  const [number, setNumber] = useState(1);
  const perPage = 5;

  const lastPage = number * perPage; //index orders first
  const firstPage = lastPage - perPage; //index orders last
  const currentOrders = orders.slice(firstPage, lastPage);
  const pageNumber = [];

  const handleChangePage = (num) => {
    setActivePage(num);
    setNumber(num);
    console.log(num);
  };

  for (let i = 1; i <= Math.ceil(orders.length / perPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="admin-sizes__wrapper">
      <h1>Orders</h1>
      {orders && (
        <table className="admin__order__table">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Orderer</th>
              <th>Phone</th>
              <th>Total</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => {
              const date = new Date(order.orderDate);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{order.id}</td>
                  <td>{order.user.fullName}</td>
                  <td>{order.user.phone}</td>
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
                  <td className="table__action">
                    <Link
                      to={`/admin/order-detail/${order.id}`}
                      className="table__action-link"
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
        <div className="home__page__articles page__end">
        <div className="div__page">
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className="icon__cross"
              />
            </li>
            {pageNumber.map((num, index) => (
              <li
                key={index}
                className={activePage === num ? "active_page_home" : ""}
                onClick={() => handleChangePage(num)}
              >
                <span>{num}</span>
              </li>
            ))}
            <li>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="icon__cross"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminOrders;
