import http from "./http-common";

const getAllArcles = () => {
  return http.get("/articles");
};
const getArcle = (id) => {
  return http.get(`/articles/${id}`);
};

const ArticlesDataService = {
  getAllArcles,
  getArcle,
};

export default ArticlesDataService;
