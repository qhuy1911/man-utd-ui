import { useEffect, useState } from "react";
import PlayerCard from "../../../components/PLayerCard";
import PlayerService from "../../../services/PlayerService";
import "./PlayerList.css";

function PlayerList() {
  const [goalkeepers, setGoakeepers] = useState(null);
  const [defenders, setDefenders] = useState(null);
  const [midfielders, setMidfielders] = useState(null);
  const [forwards, setForwards] = useState(null);

  useEffect(() => {
    getGoalKeepers();
    getDefenders();
    getMidfielders();
    getForwards();
  }, []);

  const getGoalKeepers = () => {
    PlayerService.getGoalKeepers().then((res) => {
      setGoakeepers(res.data);
    });
  };

  const getDefenders = () => {
    PlayerService.getDefenders().then((res) => {
      setDefenders(res.data);
    });
  };

  const getMidfielders = () => {
    PlayerService.getMidfielders().then((res) => {
      setMidfielders(res.data);
    });
  };

  const getForwards = () => {
    PlayerService.getForwards().then((res) => {
      setForwards(res.data);
    });
  };

  console.log(goalkeepers);

  return (
    <div className="player-list-wrapper">
      <h1>Player List</h1>
      <div className="player-group">
        <h2 className="player-group-title">Goalkeepers</h2>
        <div className="player-list">
          {goalkeepers &&
            goalkeepers.map((player) => (
              <PlayerCard key={player.id} data={player} />
            ))}
        </div>
      </div>
      <div className="player-group">
        <h2 className="player-group-title">Defenders</h2>
        <div className="player-list">
          {defenders &&
            defenders.map((player) => (
              <PlayerCard key={player.id} data={player} />
            ))}
        </div>
      </div>
      <div className="player-group">
        <h2 className="player-group-title">Midfielders</h2>
        <div className="player-list">
          {midfielders &&
            midfielders.map((player) => (
              <PlayerCard key={player.id} data={player} />
            ))}
        </div>
      </div>
      <div className="player-group">
        <h2 className="player-group-title">Forwards</h2>
        <div className="player-list">
          {forwards &&
            forwards.map((player) => (
              <PlayerCard key={player.id} data={player} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default PlayerList;
