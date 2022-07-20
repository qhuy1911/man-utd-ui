import http from "./http-common";

const getAllSizes = () => {
  return http.get("/v1/sizes");
};

const getAllSizesByProductId = (productId) => {
  return http.get(`/v1/products/${productId}/sizes`);
};

const getSizeById = (id) => {
  return http.get(`/v1/sizes/${id}`);
};

const addSize = (productId, size) => {
  return http.post(`/v1/products/${productId}/sizes`, size);
};

const updateSize = (id, size) => {
  return http.put(`/v1/sizes/${id}`, size);
};

const deleteSize = (id) => {
  return http.delete(`/v1/sizes/${id}`);
};

const SizeDataService = {
  getAllSizes,
  getAllSizesByProductId,
  getSizeById,
  addSize,
  updateSize,
  deleteSize,
};

export default SizeDataService;
