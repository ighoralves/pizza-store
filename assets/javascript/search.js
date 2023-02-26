const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");

searchButton.addEventListener("click", function () {
  searchInput.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  const isClickInside =
    searchButton.contains(event.target) || searchInput.contains(event.target);
  if (!isClickInside) {
    searchInput.classList.remove("active");
  }
});
