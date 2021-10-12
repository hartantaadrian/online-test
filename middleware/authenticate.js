const HttpError = require("../models/http-error");
const pool = require("../connection/db");

const insertLog = async (req) => {
  console.log(new Date().toISOString());

  await pool.query(
    "INSERT INTO request_log (request_date,request_path,request_param,request_header,request_body)  VALUES(now(),?,?,?,?)",
    [
      req.url,
      JSON.stringify(req.params),
      JSON.stringify(req.headers),
      req.body ? req.body : "{}",
    ]
  );
};

module.exports = async (req, res, next) => {
  try {
    await insertLog(req);
    const key = req.headers.appkey;
    if (key === undefined) {
      const error = new HttpError("Authentication failed!", 403);
      return next(error);
    }
    req.key = key;
    console.log(key);
    next();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Authentication failed!", 403);
    return next(error);
  }
};
