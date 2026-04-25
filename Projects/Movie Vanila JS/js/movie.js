const IMG = "https://image.tmdb.org/t/p/w500";

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

async function fetchMovieDetails() {
  const [detailsRes, videosRes, castRes] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`),
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`),
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
  ]);

  const details = await detailsRes.json();
  const videos = await videosRes.json();
  const cast = await castRes.json();

  displayMovie(details, videos.results, cast.cast);
}

function displayMovie(movie, videos, cast) {
  const container = document.getElementById("movieDetails");

  const trailer = videos.find(v => v.type === "Trailer");

  container.innerHTML = `
    <div class="row">
      <div class="col-md-4">
        <img src="${IMG + movie.poster_path}" class="img-fluid rounded">
      </div>

      <div class="col-md-8">
        <h2>${movie.title}</h2>
        <button class="btn btn-danger mb-3"
  onclick='addToWishlist(${movie.id})'>
  Add to Wishlist
</button>
        <p>${movie.overview}</p>

        ${trailer ? `
          <iframe width="100%" height="300"
            src="https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0"
            frameborder="0" allowfullscreen>
          </iframe>
        ` : "<p>No trailer available</p>"}

        <h4 class="mt-3">Cast</h4>
        <div class="d-flex overflow-auto">
          ${cast.slice(0, 10).map(c => `
            <div class="me-3 text-center">
              <img src="${IMG + c.profile_path}" width="80" class="rounded">
              <p>${c.name}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

// Add to Wishlist
function addToWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const exists = wishlist.find(m => m.id === id);

  if (exists) {
    alert("Already in wishlist");
    return;
  }

  // 🔥 Find movie from current page data
  const movieData = {
    id: id,
    title: document.querySelector("h2").innerText,
    poster_path: document.querySelector(".col-md-4 img").getAttribute("src")
  };

  wishlist.push(movieData);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  alert("Added to wishlist");
}

fetchMovieDetails();