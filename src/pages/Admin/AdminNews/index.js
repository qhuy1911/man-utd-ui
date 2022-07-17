import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={article.id}>
                <td>{index + 1}</td>
                <td>{article.title}</td>
                <td>{article.description}</td>
                <td className="table__action">
                  <Link to={`${article.id}`} className="table__action-link">
                    <FontAwesomeIcon icon={faPen} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminNews;
