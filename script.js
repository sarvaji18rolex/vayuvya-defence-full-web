// HERO SLIDER
const slides = document.querySelectorAll(".hero-slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);

// DARK MODE
function toggleDark() {
  document.body.classList.toggle("dark");
}

// MOBILE MENU
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}
