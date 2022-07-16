import http from "./http-common";

const getAllProducts = () => {
  return http.get("/v1/products");
};
const getProduct = (id) => {
  return http.get(`/v1/products/${id}`);
};

const ProductDataService = {
  getAllProducts,
  getProduct,
};

export default ProductDataService;
