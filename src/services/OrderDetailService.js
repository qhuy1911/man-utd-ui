import http from "./http-common";

const getAllOrderDetails = () => {
  return http.get("/v1/details");
};

const getOrderDetailsByOrderId = (orderId) => {
  return http.get(`/v1/orders/${orderId}/details`);
};

const getOrderDetailById = (id) => {
  return http.get(`/v1/details/${id}`);
};

const createOrderDetail = (orderId, sizeId, orderDetail) => {
  return http.post(
    `/v1/orders/${orderId}/sizes/${sizeId}/details`,
    orderDetail
  );
};

const OrderDetailService = {
  getAllOrderDetails,
  getOrderDetailsByOrderId,
  getOrderDetailById,
  createOrderDetail,
};

export default OrderDetailService;
