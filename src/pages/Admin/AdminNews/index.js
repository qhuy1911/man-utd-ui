import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticlesDataService from "../../../services/ArticlesDataService";
import "./AdminNews.css";

function AdminNews() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getAllArticles();
  }, []);

  const getAllArticles = () => {
    ArticlesDataService.getAllArticles().then((res) => {
      setArticles(res.data);
      console.log(res.data);
    });
  };

  return (
    <div className="admin-news__wrapper">
      <h1>Articles</h1>
      <div className="admin-news__btn">
        <Link to={"add"} className="btn-link red-btn admin-news__btn-add">
          Add Articles
        </Link>
      </div>
      {articles && (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={article.id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/admin/news/${article.id}`}>{article.title}</Link>
                </td>
                <td>{article.description}</td>
                <td>{article.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminNews;
