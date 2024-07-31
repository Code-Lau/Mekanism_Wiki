//Scroll Reveal on load
const sr = ScrollReveal ({
  distance:'65px',
  duration: 2600,
  delay:450,
  reset:true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:300, origin:'top'});
sr.reveal('.navlist-2',{delay:400, origin:'left'});

// Arrow Jump back to Top
const mybutton = document.getElementById("arrow");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}