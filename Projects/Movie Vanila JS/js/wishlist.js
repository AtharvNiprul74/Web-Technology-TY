const IMG = "https://image.tmdb.org/t/p/w500";
const container = document.getElementById("wishlist");

// Load Wishlist
function loadWishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  container.innerHTML = "";

  if (wishlist.length === 0) {
    container.innerHTML = "<h3>No items in wishlist !!</h3>";
    return;
  }

  wishlist.forEach(movie => {
    container.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card shadow">
          <img src="${IMG + movie.poster_path}" class="card-img-top">
          <div class="card-body">
            <h5>${movie.title}</h5>
            <button class="btn btn-danger" onclick="removeFromWishlist(${movie.id})">
              Remove
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// Remove
function removeFromWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  wishlist = wishlist.filter(m => m.id !== id);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  loadWishlist();
}

// Init
loadWishlist();