import axios from "axios";

const PlayerController = () => {
  const getProfile = async (steamID) =>
    axios.get(`https://api.opendota.com/api/players/${steamID}`);

  const getRecentMatches = async (steamID) =>
    axios.get(`https://api.opendota.com/api/players/${steamID}/recentMatches`);
};

export default PlayerController;
