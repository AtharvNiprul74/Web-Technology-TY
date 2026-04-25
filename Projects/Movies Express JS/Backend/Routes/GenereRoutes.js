const express = require("express")
const router = express.Router()

const {getGenereWithMovie} = require("../Controllers/GenreControllers")

router.get("/with-movies",getGenereWithMovie)

module.exports = router