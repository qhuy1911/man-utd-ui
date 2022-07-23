import { useEffect, useState } from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../components/Cards/Card";
import ArticlesDataService from "../../services/ArticlesDataService";
import "./Home.css";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles();
  }, []);

  const getAllArticles = () => {
    ArticlesDataService.getAllArticles().then((res) => {
      setArticles(res.data);
    });
  };
  const [number, setNumber] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const perPage = 6;

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
    <div className="home__wrapper">
      <Card articles={currentArticles} />
      <div className="home__page__articles">
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

export default Home;
