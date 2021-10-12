const express = require("express");

const movieController = require("../controller/movies");
const auth = require("../middleware/authenticate");
const router = express.Router();

router.use(auth);
router.get("/search", movieController.getAllMovies);
router.get("/detail/:id", movieController.getMoviesById);

module.exports = router;
