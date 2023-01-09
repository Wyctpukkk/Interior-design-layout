// beta script for atomatic slider
const quntitySlides = 6;
const timeBetweenSlides = 5000;

let i = 1;
function resetSlides() {
  i = 1;
}
function showSlides() {
  if (i == 1) {
    const currentElem = document.getElementById(i);
    currentElem.classList.add('active');
  }
  if (i == 2) {
    const prevElem = document.getElementById(quntitySlides);
    prevElem.classList.remove('active');
    const currentElem = document.getElementById(i);
    currentElem.classList.add('active');
  }
  if (i > 2 && i < 7) {
    const prevElem = document.getElementById(i - 2);
    prevElem.classList.remove('active');
    const currentElem = document.getElementById(i);
    currentElem.classList.add('active');
  }
  if (i > 6) {
    const prevElem = document.getElementById(quntitySlides - 1);
    prevElem.classList.remove('active');
    const currentElem = document.getElementById(1);
    currentElem.classList.add('active');
    resetSlides();
  }
  setTimeout(showSlides, timeBetweenSlides);
  i++;
}
showSlides();
