import http from "./http-common";

const getAllArticles = () => {
  return http.get("/v1/articles");
};
const getArticle = (id) => {
  return http.get(`/v1/articles/${id}`);
};

const addArticle = (userId, article) => {
  return http.post(`/v1/users/${userId}/articles`, article);
};

const ArticlesDataService = {
  getAllArticles,
  getArticle,
  addArticle,
};

export default ArticlesDataService;
