import http from "./http-common";

const getAllCategories = () => {
  return http.get("/v1/categories");
};

const CategoryDataService = {
  getAllCategories,
};

export default CategoryDataService;
