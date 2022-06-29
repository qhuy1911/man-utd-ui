/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./NewDetail.css";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NewDetail() {
  return (
    <>
      <div className="new__detail__background_container">
        <img
          src={require("../../assets/images/img-2.jpg")}
          alt=""
          className="image__background"
        ></img>
        <h1>
          {"Opinion: Erik can revitalise returning loan players".toUpperCase()}
        </h1>
      </div>
      <div className="new_detail_content_container">
        <div className="new_detail_content_wrapper">
          <div className="new_detail_info">
            <span>by Joe Ganley</span>
            <span>Tuesday 28 June 2022 18:32</span>
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
            <p className="new_detail_content_text title">
              What a difference a few weeks makes.
            </p>
            <p>
              It's barely a month since last season finished, but how nice it
              was to see Manchester United's first-team squad rocking up at
              Carrington for the start of pre-season 2022/23.
            </p>
            <p>
              The less said about 2021/22 the better, but that campaign already
              feels 2,000 light years away. Erik ten Hag's arrival has laced the
              place with a new optimism, and everyone at the club is looking
              forward with positivity.
            </p>
            <p>
              You could see that on many of the pictures shared on Monday (27
              June). There was freshness in the players' faces and a relaxedness
              to their dispositions. And you suspect that's not just because of
              the new training kit, or the few weeks' holiday they've just
              enjoyed.
            </p>
            <p>
              Ten Hag's arrival signals a new start. For everyone. Over the
              coming weeks, the Dutchman will be paying close attention to each
              player and every little detail he can spot. And who knows what
              that could mean for the make-up of the squad?
            </p>
            <p>Could it even make for some quite radical changes?</p>
            <p>
              Take Anthony Martial, for example. The Frenchman's smiling
              demeanour on day one at Carrington embodied the new-found, upbeat
              atmosphere, and no wonder.
            </p>
            <p>
              The last couple of years have been difficult for the striker.
              Since a brilliant 2019/20 season, when he scored 23 goals and was
              named the Players' Player of the Year, he has suffered injury
              issues and lost his place. He spent the second half of 2021/22 at
              Sevilla, where injuries once again beset him.
            </p>
            <p>
              But there's a big opportunity for Martial under ten Hag. United's
              leading striker last year was Cristiano Ronaldo, who netted 24
              goals, but the Portuguese legend is 37 years old and probably
              unlikely to play every game.
            </p>
            <p>
              With Edinson Cavani gone, Martial has a clear pathway to
              first-team minutes and chances to impress, if he can excite Ten
              Hag during pre-season. He'll be working with a new manager that
              has a strong track record when it comes to revitalising players.
              Think about Sebastien Haller, who struggled at West Ham United
              before exploding into life under Ten Hag at Ajax.
            </p>
            <p>
              A determined, injury-free Martial can be a huge boost to United,
              despite the difficulties of the last couple of seasons.
            </p>
          </div>
          <div className="div__back__top">
            <span className="icon__info btn__back__top">
              <span>Back to top</span>
              <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewDetail;
