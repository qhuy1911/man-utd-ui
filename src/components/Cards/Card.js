import React from "react";
import "./Card.css";
import CardItem from "./CardItem";
import CardItemNew from "./CardItemNew";

function Card() {
  return (
    <div className="cards__container">
      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItemNew
            src={require("../../assets/images/img-2.jpg")}
            alt="news"
            title="Opinion: Erik can revitalise returning loan players"
            description="Erik ten Hag's arrival spells opportunity for Martial, Tuanzebe, van de Beek and Williams."
            path={`/news-detail/${"Opinion: Erik can revitalise returning loan players"}`}
          />
          <CardItemNew
            src={require("../../assets/images/img-1.jpg")}
            alt="news"
            title="Explore the hidden waterfall deep inside the Amazon Jungle"
            description="Erik ten Hag's arrival spells opportunity for Martial, Tuanzebe, van de Beek and Williams."
            path="/"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src={require("../../assets/images/img-1.jpg")}
            alt="news"
            title="Explore the hidden waterfall deep inside the Amazon Jungle"
            description="Erik ten Hag's arrival spells opportunity for Martial, Tuanzebe, van de Beek and Williams."
            path="/"
          />
          <CardItem
            src={require("../../assets/images/img-1.jpg")}
            alt="news"
            title="Explore the hidden waterfall deep inside the Amazon Jungle"
            description="Erik ten Hag's arrival spells opportunity for Martial, Tuanzebe, van de Beek and Williams."
            path="/"
          />
          <CardItem
            src={require("../../assets/images/img-1.jpg")}
            alt="news"
            title="Explore the hidden waterfall deep inside the Amazon Jungle"
            description="Erik ten Hag's arrival spells opportunity for Martial, Tuanzebe, van de Beek and Williams."
            path="/"
          />
          <CardItem
            src={require("../../assets/images/img-1.jpg")}
            alt="news"
            title="Explore the hidden waterfall deep inside the Amazon Jungle"
            description="Erik ten Hag's arrival spells opportunity for Martial, Tuanzebe, van de Beek and Williams."
            path="/"
          />
        </ul>
      </div>
    </div>
  );
}

export default Card;
