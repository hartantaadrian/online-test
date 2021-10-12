const axios = require("axios");

let axiosInstace = axios.create({
  baseURL: "http://www.omdbapi.com/",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = axiosInstace;
