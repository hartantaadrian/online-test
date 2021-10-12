const axios = require("../connection/axios");
const HttpError = require("../models/http-error");

const getAllMovies = async (req, res, next) => {
  try {
    let movReq = await axios.get(`/?apikey=${req.key}&s=Batman&page=2`);
    if (movReq.status == 200) {
      res.json(movReq.data);
    } else {
      return next(new HttpError("You have not authrize delete this data", 401));
    }
  } catch (err) {
    return next(new HttpError(err, 500));
  }
};

const getMoviesById = async (req, res, next) => {
  try {
    let movReq = await axios.get(`/?i=${req.params.id}&apikey=${req.key}`);
    if (movReq.status == 200) {
      res.json(movReq.data);
    } else {
      return next(new HttpError("You have not authrize delete this data", 401));
    }
  } catch (err) {
    return next(new HttpError(err, 500));
  }
};

module.exports = {
  getAllMovies,
  getMoviesById,
};
