const IMG = "https://image.tmdb.org/t/p/w500";

const container = document.getElementById("movies");

const popularContainer = document.getElementById("popular");

const trailerContainer = document.getElementById("trailerSection");

async function loadAutoTrailers() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();

  const movies = data.results;

  const trailerMovies = [];

  // 🔥 Find movies with trailers (max 3)
  for (let movie of movies.slice(0, 8)) {
    if (trailerMovies.length >= 3) break;

    const videoRes = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
    );

    const videoData = await videoRes.json();

    const trailer = videoData.results.find(v => v.type === "Trailer");

    if (trailer) {
      trailerMovies.push({
        movie,
        trailerKey: trailer.key
      });
    }
  }

  // ⚠️ Safety check
  if (!trailerMovies.length) {
    trailerContainer.innerHTML = "<h3>No trailers available ... !!</h3>";
    return;
  }

  let index = 0; // ✅ FIXED

  function showTrailer() {
    const item = trailerMovies[index];

    trailerContainer.innerHTML = `
      <div class="trailer-box">
        <iframe 
          src="https://www.youtube.com/embed/${item.trailerKey}?autoplay=1&mute=1&controls=0"
          frameborder="0"
          allow="autoplay"
        ></iframe>

        <div class="trailer-overlay">
          <h2>${item.movie.title}</h2>
          <p>${item.movie.overview.slice(0, 120)}...</p>
        </div>
      </div>
    `;

    index = (index + 1) % trailerMovies.length;
  }

  // ✅ Show immediately
  showTrailer();

  // 🔄 Auto change every 5 sec
  setInterval(() => showTrailer(), 10000);
}

async function fetchPopular() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();

  const movies = data.results.slice(0, 8); // 2 rows (4 + 4)

  popularContainer.innerHTML = "";

  movies.forEach(movie => {
    popularContainer.innerHTML += `
       <div class="col-md-3 mb-4">
        <div class="card shadow big-card" onclick="openMovie(${movie.id})">
          <img src="${movie.poster_path ? IMG + movie.poster_path : "https://via.placeholder.com/300"}" class="card-img-top">
          <div class="card-body">
            <h5>${movie.title}</h5>
          </div>
        </div>
      </div>
    `;
  });
}

// Fetch Movies
async function fetchGenresWithMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();

  const selectedGenres = data.genres.slice(0, 4); // only 4 genres

  const section = document.getElementById("genresSection");

  section.innerHTML = "";

  for (let genre of selectedGenres) {
    const movieRes = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`
    );

    const movieData = await movieRes.json();

    section.innerHTML += `
      <h4 class="mt-4">${genre.name}</h4>
      <div class="scroll-row">
        ${movieData.results.slice(0, 10).map(movie => `
          <div class="medium-card" onclick="openMovie(${movie.id})">
            <img src="${movie.poster_path ? IMG + movie.poster_path : "https://via.placeholder.com/300"}">
          </div>
        `).join("")}
      </div>
    `;
  }
}

function openMovie(id) {
  window.location.href = `movies.html?id=${id}`;
}

async function loadGenresDropdown() {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();

  const select = document.getElementById("genreSelect");

  select.innerHTML = `<option value="">Select Genre</option>`;

  data.genres.forEach(g => {
    select.innerHTML += `<option value="${g.id}-${g.name}">${g.name}</option>`;
  });
}

document.getElementById("genreSelect").addEventListener("change", async (e) => {
  const value = e.target.value;

  if (!value) return;

  const [id, name] = value.split("-");

  window.location.href = `genre.html?id=${id}&name=${encodeURIComponent(name)}`;

});

loadAutoTrailers();
fetchPopular();
fetchGenresWithMovies();
loadGenresDropdown();