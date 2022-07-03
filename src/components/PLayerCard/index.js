import { Link } from "react-router-dom";
import "./PlayerCard.css";

function PlayerCard({ data }) {
  return (
    <>
      {data && (
        <Link to={`/players/${data.id}/detail`} className="player-card-wrapper">
          <img
            className="player-card-img"
            src={require(`../../assets/images/player-avatar/${data.avatar}`)}
            alt="avatar"
          />
          <div className="overlay"></div>
          <div className="player-card-info">
            <div className="player-card-number">{data.number}</div>
            <div className="player-card-name">
              <span className="player-card-first-name">{data.firstName}</span>
              <span className="player-card-last-name">{data.lastName}</span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default PlayerCard;
