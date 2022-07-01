import React, { useEffect, useState } from "react";
import ArticlesDataService from "../../service/ArticlesDataService";
import "./Card.css";
import CardItem from "./CardItem";

function Card() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArcles();
  }, []);

  const getAllArcles = () => {
    ArticlesDataService.getAllArcles().then((res) => setArticles(res.data));
  };

  return (
    <div className="cards__container">
      <div className="cards__wrapper">
        <ul className="cards__items">
          {articles.map((article) => {
            return (
              <CardItem
                key={article.id}
                src={require(`../../assets/images/${article.image}`)}
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
