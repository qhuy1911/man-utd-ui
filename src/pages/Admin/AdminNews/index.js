import { faPen, faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticlesDataService from "../../../services/ArticlesDataService";
import "./AdminNews.css";

function AdminNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles();
  }, []);

  const getAllArticles = () => {
    ArticlesDataService.getAllArticles().then((res) => {
      setArticles(res.data);
      console.log(res.data);
    });
  };
  const [activePage, setActivePage] = useState(1);

  const [number, setNumber] = useState(1);
  const perPage = 5;

  const lastPage = number * perPage; //index product first
  const firstPage = lastPage - perPage; //index product last
  const currentArticles = articles.slice(firstPage, lastPage);
  const pageNumber = [];

  const handleChangePage = (num) => {
    setActivePage(num);
    setNumber(num);
    console.log(num);
  };

  for (let i = 1; i <= Math.ceil(articles.length / perPage); i++) {
    pageNumber.push(i);
  }
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
            {currentArticles.map((article, index) => (
              <tr key={article.id}>
                <td>{index + firstPage + 1}</td>
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
       <div className="home__page__articles page__end">
        <div className="div__page">
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className="icon__cross"
                onClick={() => {
                  setNumber(number - 1);
                }}
              />
            </li>
            {pageNumber.map((num, index) => (
              <li
                key={index}
                className={activePage === num ? "active_page_home" : ""}
                onClick={() => handleChangePage(num)}
              >
                <span>{num}</span>
              </li>
            ))}
            <li>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="icon__cross"
                onClick={() => {
                  setNumber(number + 1);
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminNews;
