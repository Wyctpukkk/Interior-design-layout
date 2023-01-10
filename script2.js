window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const callback = function (entries) {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry;
    isIntersecting
      ? target.classList.add('action')
      : target.classList.remove('action');
  });
};
const options = {
  threshold: [0],
};
const observer = new IntersectionObserver(callback, options);
const targets = document.querySelectorAll('.action-script');
targets.forEach((target) => observer.observe(target));

// Header
const target3 = document.querySelector('header');
const callback3 = function (entries) {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry;
    target.classList.add('action');
  });
};
const options3 = {
  threshold: [0],
};
const observer3 = new IntersectionObserver(callback3, options3);
observer3.observe(target3);
