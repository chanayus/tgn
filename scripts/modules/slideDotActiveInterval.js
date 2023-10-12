const addActiveDotInterval = (selector) => {
  const activeDot = document.querySelector(`${selector} .splide__pagination .is-active`);

  const dots = document.querySelectorAll(`${selector} .splide__pagination__page`);
  const div = document.createElement("div");
  div.className = "active-interval";

  dots.forEach((dot) => (dot.innerHTML = ""));
  activeDot.appendChild(div);
};

export const initActiveDotInterval = (selector, slide) => {
  slide.on("autoplay:playing", function (rate) {
    const activeDot = document.querySelector(`${selector} .splide__pagination .is-active .active-interval`);
    if (activeDot) {
      activeDot.style.width = `${Math.round(rate * 100)}%`;
    }
  });

  slide.on("move", () => addActiveDotInterval(selector));

  addActiveDotInterval(selector);
};
