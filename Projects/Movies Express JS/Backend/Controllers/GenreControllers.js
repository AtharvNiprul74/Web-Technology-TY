const axios = require("axios");
const { API_KEY, BASE_URL } = require("../Secrets");

let cachedData = null;

exports.getGenereWithMovie = async (req, res) => {
    try {
        if (cachedData) {
            console.log("⚡ Serving from cache");
            return res.json(cachedData);
        }

        const genreRes = await axios.get(
            `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
        );

        const genres = genreRes.data?.genres || [];

        if (!genres.length) {
            return res.status(500).json({ error: "No genres found" });
        }

        const selectedGenres = genres.slice(0, 4);
        const result = [];

        for (let genre of selectedGenres) {
            try {
                const movieRes = await axios.get(
                    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}&sort_by=popularity.desc`
                );

                const movies = movieRes.data?.results || [];

                result.push({
                    genre: genre.name,
                    movies: movies.slice(0, 10)
                });

            } catch (err) {
                console.log("🔥 Error in genre:", genre.name);
            }
        }

        cachedData = result;
        res.json(result);

    } catch (error) {
        console.error("🔥 ERROR:", error.message);
        res.status(500).json({
            error: "Failed to fetch genre movies",
            details: error.message
        });
    }
};