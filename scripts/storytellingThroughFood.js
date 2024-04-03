import * as splide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const slide = new splide.Splide("#pillars-slide", {
  perPage: 5,
  perMove: 1,
  focus: "center",
  trimSpace: false,
  type: "loop",
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  pauseOnHover: false,
  pauseOnFocus: false,
  updateOnMove: true,

  breakpoints: {
    1280: {
      perPage: 2,
    },
    960: {
      perPage: 2,
      gap: "1rem",
    },

    640: {
      perPage: 1,
      gap: "1rem",
    },
  },
}).mount();

const addPaginationProgress = () => {
  const paginationButtons = document.querySelectorAll(".splide__pagination__page");
  paginationButtons?.forEach((item) => (item.innerHTML = ""));
  paginationButtons[slide.index].innerHTML = `<div class="active-interval"></div>`;
};

slide.on("pagination:updated", () => addPaginationProgress());
slide.on("autoplay:play", () => addPaginationProgress());

addPaginationProgress();

gsap
  .timeline()
  .fromTo("header h2", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, duration: 0.85, ease: "expo" })
  .fromTo("header img", { autoAlpha: 0, scale: 0.9 }, { autoAlpha: 1, scale: 1, duration: 0.85, ease: "expo" },"-=0.35")
  .fromTo("header p", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.85, ease: "expo" }, "-=0.5")
;
