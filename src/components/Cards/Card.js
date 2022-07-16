import React, { useEffect, useState } from "react";
import ArticlesDataService from "../../services/ArticlesDataService";
import styles from "./Card.module.scss";
import CardItem from "./CardItem";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
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
    <div className={cx("cards__container")}>
      <div className={cx("cards__wrapper")}>
        <ul className={cx("cards__items")}>
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
