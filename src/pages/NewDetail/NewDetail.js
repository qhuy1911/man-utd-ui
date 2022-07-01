/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import "./NewDetail.css";
import { useParams } from "react-router-dom";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArticlesDataService from "../../service/ArticlesDataService";

function NewDetail() {
  let { id } = useParams();

  const [article, setArticles] = useState(null);

  const [contents, setContents] = useState();

  useEffect(() => {
    getArticle(id);
  }, [id]);

  const getArticle = (id) => {
    ArticlesDataService.getArcle(id).then((res) => {
      setArticles(res.data);
      let texts = res.data.content.split(".");
      setContents(texts);
    });
  };

  return (
    <>
      {article ? (
        <div>
          <div className="new__detail__background_container">
            <img
              src={require(`../../assets/images/${article.image}`)}
              alt=""
              className="image__background"
            ></img>
            <h1>{article.title.toUpperCase()}</h1>
          </div>
          <div className="new_detail_content_container">
            <div className="new_detail_content_wrapper">
              <div className="new_detail_info">
                <span>by {article.author.fullName}</span>
                <span>{new Date(article.updatedAt).toUTCString()}</span>
              </div>
              <div>
                <ul className="list__icon__info">
                  <li className="icon__info twittwer__icon">
                    <a>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="icon__info facebook__icon">
                    <a>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="new_detail_content_text">
                {contents.map((content, index) => (
                  <p key={index}>{content}</p>
                ))}
              </div>
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
