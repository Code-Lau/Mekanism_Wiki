/* //Burger Menu in mobile */
let hamburger = document.querySelector('.hamburger');
let header = document.querySelector('header');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  header.classList.toggle('active');
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  header.classList.remove("active");
})) 

