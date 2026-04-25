const IMG = "https://image.tmdb.org/t/p/w500";
const BASE_URL = "http://localhost:3000";

// Elements
const trailerContainer = document.getElementById("trailerSection");
const popularContainer = document.getElementById("popular");

// 🔥 Safe Fetch Helper
async function safeFetch(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("HTTP Error: " + res.status);
    }

    const data = await res.json();
    return data;
    

  } catch (err) {
    console.error("🔥 Fetch Failed:", err.message);
    return null;
  }
}


///////////////////////////////////////////////////////////
// 🎬 AUTO TRAILERS
///////////////////////////////////////////////////////////
async function loadAutoTrailers() {
  const trailerMovies = await safeFetch(`${BASE_URL}/api/movies/trailers`);

  if (!trailerMovies || !Array.isArray(trailerMovies) || trailerMovies.length === 0) {
    trailerContainer.innerHTML = "<h3>No trailers available 😢</h3>";
    return;
  }

  let index = 0;

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
          <h2>${item.movie?.title || "No Title"}</h2>
          <p>${item.movie?.overview ? item.movie.overview.slice(0, 120) : "No description"}...</p>
        </div>
      </div>
    `;

    index = (index + 1) % trailerMovies.length;
  }

  showTrailer();
  setInterval(showTrailer, 10000);
}

///////////////////////////////////////////////////////////
// ⭐ POPULAR MOVIES
///////////////////////////////////////////////////////////
async function fetchPopular() {
  const movies = await safeFetch(`${BASE_URL}/api/movies/popular`);

  if (!movies || !Array.isArray(movies)) {
    popularContainer.innerHTML = "<h3>Failed to load movies 😢</h3>";
    return;
  }

  popularContainer.innerHTML = "";

  movies.forEach(movie => {
    popularContainer.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card shadow big-card" onclick="openMovie(${movie.id})">
          <img src="${movie.poster_path ? IMG + movie.poster_path : "https://via.placeholder.com/300"}" class="card-img-top">
          <div class="card-body">
            <h5>${movie.title || "No Title"}</h5>
          </div>
        </div>
      </div>
    `;
  });
}

///////////////////////////////////////////////////////////
// 🎭 GENRES WITH MOVIES
///////////////////////////////////////////////////////////
async function fetchGenresWithMovies() {
  const data = await safeFetch(`${BASE_URL}/api/genres/with-movies`);
  const section = document.getElementById("genresSection");

  if (!data || !Array.isArray(data)) {
    section.innerHTML = "<h3>Failed to load genres 😢</h3>";
    return;
  }

  section.innerHTML = "";

  data.forEach(item => {
    section.innerHTML += `
      <h4 class="mt-4">${item.genre || "Unknown Genre"}</h4>
      <div class="scroll-row">
        ${(item.movies || []).map(movie => `
          <div class="medium-card" onclick="openMovie(${movie.id})">
            <img src="${movie.poster_path ? IMG + movie.poster_path : "https://via.placeholder.com/300"}">
          </div>
        `).join("")}
      </div>
    `;
  });
}

///////////////////////////////////////////////////////////
// 🎯 NAVIGATION
///////////////////////////////////////////////////////////
function openMovie(id) {
  window.location.href = `movies.html?id=${id}`;
}

///////////////////////////////////////////////////////////
// 🎯 GENRE DROPDOWN
///////////////////////////////////////////////////////////
async function loadGenresDropdown() {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);

    if (!res.ok) throw new Error("Failed to load genres");

    const data = await res.json();

    const select = document.getElementById("genreSelect");
    select.innerHTML = `<option value="">Select Genre</option>`;

    data.genres.forEach(g => {
      select.innerHTML += `<option value="${g.id}-${g.name}">${g.name}</option>`;
    });

  } catch (err) {
    console.error("🔥 Genre Load Error:", err.message);
  }
}

document.getElementById("genreSelect").addEventListener("change", (e) => {
  const value = e.target.value;

  if (!value) return;

  const [id, name] = value.split("-");
  window.location.href = `genre.html?id=${id}&name=${encodeURIComponent(name)}`;
});

///////////////////////////////////////////////////////////
// 🚀 INIT
///////////////////////////////////////////////////////////
loadAutoTrailers();
fetchPopular();
fetchGenresWithMovies();
loadGenresDropdown();