import http from "./http-common";

const getAllProducts = () => {
  return http.get("/v1/products");
};

const getProduct = (id) => {
  return http.get(`/v1/products/${id}`);
};

const addProduct = (categoryId, product) => {
  return http.post(`/v1/categories/${categoryId}/products`, product);
};

const updateProduct = (categoryId, id, product) => {
  return http.put(`/v1/categories/${categoryId}/products/${id}`, product);
};

const deleteProduct = (id) => {
  return http.delete(`/v1/products/${id}`);
};

const ProductDataService = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};

export default ProductDataService;
