/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArticlesDataService from "../../services/ArticlesDataService";
import classNames from "classnames/bind";
import styles from "./NewDetail.module.scss";

const cx = classNames.bind(styles);

function NewDetail() {
  let { id } = useParams();

  const [article, setArticles] = useState(null);

  useEffect(() => {
    getArticle(id);
  }, [id]);

  const getArticle = (id) => {
    ArticlesDataService.getArticle(id).then((res) => {
      setArticles(res.data);
    });
  };

  return (
    <>
      {article ? (
        <div>
          <div className="new__detail__background_container">
            <img src={article.image} alt="" className="image__background"></img>
            <h1>{article.title.toUpperCase()}</h1>
          </div>
          <div className={cx("new_detail_content_container")}>
            <div className={cx("new_detail_content_wrapper")}>
              <div className={cx("new_detail_info")}>
                <span>by {article.author.fullName}</span>
                <span>{new Date(article.updatedAt).toUTCString()}</span>
              </div>
              <div>
                <ul className={cx("list__icon__info")}>
                  <li className={cx("twittwer__icon")}>
                    <a>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className={cx("facebook__icon")}>
                    <a>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="new_detail_content_text"
                dangerouslySetInnerHTML={{
                  __html: article.content,
                }}
              ></div>
              <div className="div__back__top">
                <span className="icon__info btn__back__top">
                  <span>Back to top</span>
                  <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
}

export default NewDetail;
