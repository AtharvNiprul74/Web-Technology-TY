const IMG = "https://image.tmdb.org/t/p/w500";

const params = new URLSearchParams(window.location.search);

const genreId = params.get("id");
const genreName = params.get("name");

document.getElementById("genreTitle").innerText = decodeURIComponent(genreName);

async function fetchGenreMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );

  const data = await res.json();

  const container = document.getElementById("genreMovies");

  container.innerHTML = "";

  data.results.forEach(movie => {
    container.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card shadow" onclick="openMovie(${movie.id})">
          <img src="${movie.poster_path ? IMG + movie.poster_path : "https://via.placeholder.com/300"}" class="card-img-top">
          <div class="card-body">
            <h5>${movie.title}</h5>
          </div>
        </div>
      </div>
    `;
  });
}

function openMovie(id) {
  window.location.href = `movies.html?id=${id}`;
}
fetchGenreMovies();
