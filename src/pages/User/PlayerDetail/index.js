import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayerService from "../../../services/PlayerService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./PlayerDetail.css";

function PlayerDetail() {
  let { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    getPlayer(id);
  }, [id]);

  const getPlayer = (id) => {
    PlayerService.getPlayer(id).then((res) => {
      console.log(res.data);
      setPlayer(res.data);
    });
  };

  return (
    <>
      {player && (
        <div className="player-detail__wrapper">
          <div className="player-detail__bg">
            <div
              className="player-detail__bg-avatar"
              style={{
                backgroundImage: `url(/players-bg/${player.background})`,
              }}
            ></div>
            <div className="player-detail__bg-number">{player.number}</div>
          </div>
          <div className="player-detail__main">
            <div className="player-info">
              <div className="player-info__number-name">
                <div className="player-info__number">{player.number}</div>
                <div className="player-info__name">
                  <div className="player-info__first-name">
                    {player.firstName}
                  </div>
                  <div className="player-info__last-name">
                    {player.lastName}
                  </div>
                </div>
              </div>
              <div className="player-info__quote">{player.slogan}</div>
            </div>
            <div className="player-detail">
              <div className="player-detail__top">
                <div className="player-detail__top-group">
                  <span className="player-detail__top-headding">Age</span>
                  <span className="player-detail__top-value">{player.age}</span>
                </div>
                <div className="player-detail__top-group">
                  <span className="player-detail__top-headding">
                    Appearances
                  </span>
                  <span className="player-detail__top-value">
                    {player.appearances}
                  </span>
                </div>
              </div>
              <div className="player-detail__bottom">
                <div className="player-detail__bottom-group">
                  <span className="player-detail__bottom-headding">
                    Position
                  </span>
                  <span className="player-detail__bottom-value">
                    {player.position}
                  </span>
                </div>
                <div className="player-detail__bottom-group">
                  <span className="player-detail__bottom-headding">
                    Country
                  </span>
                  <span className="player-detail__bottom-value">
                    <img
                      width="30"
                      src={require(`../../../assets/images/flags/${player.flag}`)}
                      alt="Flag"
                    />
                    {player.country}
                  </span>
                </div>
                <div className="player-detail__bottom-group">
                  <span className="player-detail__bottom-headding">
                    Date of birth
                  </span>
                  <span className="player-detail__bottom-value">
                    {player.dateOfBirth}
                  </span>
                </div>
                <div className="player-detail__bottom-group">
                  <span className="player-detail__bottom-headding">Joined</span>
                  <span className="player-detail__bottom-value">
                    {player.joined}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="player-detail__bio">
            <h2>Biography</h2>
            <div className="player-detail__bio-title">{player.title}</div>
            {showContent && (
              <div className="player-detail__bio-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: player.biography,
                  }}
                ></div>
              </div>
            )}
            <div
              className="more-content"
              onClick={() => setShowContent(!showContent)}
            >
              {showContent ? (
                <span>
                  Read Less
                  <FontAwesomeIcon className="more-icon" icon={faAngleUp} />
                </span>
              ) : (
                <span>
                  Read More
                  <FontAwesomeIcon className="more-icon" icon={faAngleDown} />
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PlayerDetail;
