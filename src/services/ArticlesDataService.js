import http from "./http-common";

const getAllArcles = () => {
  return http.get("/v1/articles");
};
const getArcle = (id) => {
  return http.get(`/v1/articles/${id}`);
};

const ArticlesDataService = {
  getAllArcles,
  getArcle,
};

export default ArticlesDataService;
