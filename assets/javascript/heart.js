const heartIcons = document.querySelectorAll(".uil-heart");

for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener("click", () => {
    heartIcons[i].classList.toggle("active");
  });
}
