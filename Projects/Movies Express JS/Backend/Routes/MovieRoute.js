const express = require("express")
const router = express.Router()
const {getPopularMovies , getAutoTrailers, getMovieDetails} = require("../Controllers/MovieController")
const { getGenereWithMovies } = require("../Controllers/GenreControllers")

router.get("/popular",getPopularMovies)
router.get("/trailers",getAutoTrailers)
router.get("/:id",getMovieDetails)

module.exports = router