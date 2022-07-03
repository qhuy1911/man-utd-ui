import http from "./http-common";

const getAllPlayers = () => {
  return http.get("/v1/players");
};

const getPlayer = (id) => {
  return http.get(`/v1/players/${id}`);
};

const getGoalKeepers = () => {
  return http.get("/v1/players/goalkeeper");
};

const getDefenders = () => {
  return http.get("/v1/players/defender");
};

const getMidfielders = () => {
  return http.get("/v1/players/midfielder");
};

const getForwards = () => {
  return http.get("/v1/players/forward");
};

const PlayerService = {
  getAllPlayers,
  getPlayer,
  getGoalKeepers,
  getDefenders,
  getMidfielders,
  getForwards,
};

export default PlayerService;
