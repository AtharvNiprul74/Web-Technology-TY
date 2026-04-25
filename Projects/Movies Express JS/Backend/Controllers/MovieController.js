exports.getPopularMovies = async (req, res) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}`
        );

        const movies = response.data?.results || [];

        res.json(movies.slice(0, 8));

    } catch (error) {
        console.error("🔥 Popular Movies Error:", error.message);
        res.status(500).json({
            error: "Failed to fetch popular movies"
        });
    }
};

exports.getAutoTrailers = async (req, res) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}`
        );

        const movies = response.data?.results || [];
        const topMovies = movies.slice(0, 8);

        const trailerMovies = [];

        for (let movie of topMovies) {
            if (trailerMovies.length >= 3) break;

            try {
                const videoRes = await axios.get(
                    `${BASE_URL}/movie/${movie.id}/videos?api_key=${API_KEY}`
                );

                const videos = videoRes.data?.results || [];

                const trailer = videos.find(v => v.type === "Trailer");

                if (trailer) {
                    trailerMovies.push({
                        movie,
                        trailerKey: trailer.key
                    });
                }

            } catch (err) {
                console.log("⚠️ Trailer fetch failed for:", movie.id);
            }
        }

        res.json(trailerMovies);

    } catch (error) {
        console.error("🔥 Trailer Error:", error.message);
        res.status(500).json({
            error: "Failed to fetch trailers"
        });
    }
};

exports.getMovieDetails = async (req, res) => {
    const id = req.params.id;

    try {
        const detailsRes = await axios.get(
            `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
        );

        const details = detailsRes.data;

        if (!details || details.status_code) {
            return res.status(404).json({ error: "Movie not found" });
        }

        let videos = [];
        let cast = [];

        try {
            const vRes = await axios.get(
                `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
            );
            videos = vRes.data?.results || [];
        } catch {
            console.log("⚠️ Videos failed");
        }

        try {
            const cRes = await axios.get(
                `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
            );
            cast = cRes.data?.cast || [];
        } catch {
            console.log("⚠️ Credits failed");
        }

        res.json({
            movie: {
                id: details.id,
                title: details.title,
                overview: details.overview,
                poster_path: details.poster_path
            },
            trailer: videos.find(v => v.type === "Trailer") || null,
            cast: cast.slice(0, 10)
        });

    } catch (error) {
        console.error("🔥 ERROR:", error.message);
        res.status(500).json({
            error: "Server issue or slow network"
        });
    }
};