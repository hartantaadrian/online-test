const express = require("express");
const bodyParser = require("body-parser");
const serverProp = require("./prop/server.json");

const movieRoute = require("./routes/movies");

const app = express();

app.use("/movies", movieRoute);

app.use((req, res, next) => {
  throw new HttpError("path not found", 404);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  // console.log(error);
  res.status(error.code || 500);
  res.json({ message: error.message || "An error occured on server!!" });
});
const port = process.env.PORT || serverProp.port;
app.listen(port);
console.log(`server run on port ${process.env.PORT || serverProp.port}`);
module.exports = app;
