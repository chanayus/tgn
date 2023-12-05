import { setCloseAllBeforeToggle } from "./modules/collapsibleMenu.js";
import * as splide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

setCloseAllBeforeToggle(true);

const slide = new splide.Splide("#pillars-slide", {
  perPage: 3,
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
  gap: "3rem",
  breakpoints: {
    1280: {
      perPage: 2,
    },
    960: {
      perPage: 2,
      gap: "1rem",
    },

    640: {
      perPage: 1.5,
      gap: "1rem",
    },
  },
}).mount();

const addPaginationProgress = () => {
  const paginationButtons = document.querySelectorAll(".splide__pagination__page");
  paginationButtons.forEach((item) => (item.innerHTML = ""));
  paginationButtons[slide.index].innerHTML = `<div class="active-interval"></div>`;
};

slide.on("pagination:updated", () => addPaginationProgress());
slide.on("autoplay:play", () => addPaginationProgress());

addPaginationProgress();
gsap
  .timeline()
  .to(
    "#header-section",
    {
      autoAlpha: 1,
    },
    "+=0.5"
  )
  .fromTo(
    "#header-image img",
    {
      x: "-100%",
      scale: 1.5,
    },
    {
      x: 0,
      scale: 1,
      autoAlpha: 1,
      duration: 1,
      ease: "expo",
    },
    "-=0.5"
  )
  .fromTo(
    "#header-text > *",
    {
      y: 25,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: "expo",
      stagger: 0.1,
    },
    "-=0.5"
  );
