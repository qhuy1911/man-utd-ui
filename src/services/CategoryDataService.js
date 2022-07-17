import http from "./http-common";

const getAllCategories = () => {
  return http.get("/v1/categories");
};

const getCategory = (id) => {
  return http.get(`/v1/categories/${id}`);
};

const addCategory = (category) => {
  return http.post("/v1/categories", category);
};

const updateCategory = (id, category) => {
  return http.put(`/v1/categories/${id}`, category);
};

const deleteCategory = (id) => {
  return http.delete(`/v1/categories/${id}`);
};

const CategoryDataService = {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};

export default CategoryDataService;
