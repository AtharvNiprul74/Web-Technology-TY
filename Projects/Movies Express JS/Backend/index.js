const express = require("express")
const app = express()
const cors = require("cors")

const MovieRoutes = require("./Routes/MovieRoute")
const GenreRoutes = require("./Routes/GenereRoutes")

app.use(cors())

app.use("/api/movies", MovieRoutes)
app.use("/api/genres", GenreRoutes)

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
})