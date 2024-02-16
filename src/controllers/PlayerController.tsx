import axios from "axios";

export const getProfile = async (steamID) =>
  axios.get(`https://api.opendota.com/api/players/${steamID}`);

export const getRecentMatches = async (steamID) =>
  axios.get(`https://api.opendota.com/api/players/${steamID}/recentMatches`);
