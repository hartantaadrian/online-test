const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
  try {
    const key = req.headers.appkey;
    if (key === undefined) {
      const error = new HttpError("Authentication failed!", 403);
      return next(error);
    }
    req.key = key;
    console.log(key);
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 403);
    return next(error);
  }
};
