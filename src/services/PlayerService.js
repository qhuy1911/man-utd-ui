import http from "./http-common";

const getAllPlayers = () => {
  return http.get("/v1/players");
};

const getPlayer = (id) => {
  return http.get(`/v1/players/${id}`);
};

const PlayerService = {
  getAllPlayers,
  getPlayer,
};

export default PlayerService;
