import http from "./http-common";

const getAllOrders = () => {
  return http.get("/v1/orders");
};

const getOrderByUserId = (userId) => {
  return http.get(`/v1/users/${userId}/orders`);
};

const getOrderById = (id) => {
  return http.get(`/v1/orders/${id}`);
};

const createOrder = (userId, order) => {
  return http.post(`/v1/user/${userId}/orders`, order);
};

const updateStatusOrder = (id) => {
  return http.put(`/v1/order/${id}`);
};

const OrderService = {
  getAllOrders,
  getOrderByUserId,
  getOrderById,
  createOrder,
  updateStatusOrder,
};

export default OrderService;
