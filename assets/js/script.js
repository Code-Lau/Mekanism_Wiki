/* jshint esversion: 11 */

//Scroll Reveal on load
const sr = ScrollReveal ({
  distance:'65px',
  duration: 2600,
  delay:450,
  reset:true
});

sr.reveal('.logo',{delay:200, origin:'top'});
sr.reveal('.nav-menu',{delay:200, origin:'top'});
sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:300, origin:'top'});
sr.reveal('.email',{delay:400, origin:'left'});
sr.reveal('.socialicons',{delay:400, origin:'right'});
sr.reveal('video',{delay:400, origin:'left'});
sr.reveal('.guide-img',{delay:400, origin:'left'});
sr.reveal('.download-container',{delay:400, origin:'top'});

//Arrow Jump back to Top
const mybutton = document.getElementById("pickaxe");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}