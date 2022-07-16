import React, { useEffect, useState } from "react";
import ArticlesDataService from "../../services/ArticlesDataService";
import "./Card.css";
import CardItem from "./CardItem";

function Card() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles();
  }, []);

  const getAllArticles = () => {
    ArticlesDataService.getAllArticles().then((res) => {
      setArticles(res.data);
    });
  };

  return (
    <div className="cards__container">
      <div className="cards__wrapper">
        <ul className="cards__items">
          {articles &&
            articles.map((article) => {
              return (
                <CardItem
                  key={article.id}
                  src={article.image}
                  alt="news"
                  title={article.title}
                  description={article.description}
                  path={`/news-detail/${article.id}`}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Card;
