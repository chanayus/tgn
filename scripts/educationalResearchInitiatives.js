import { setCloseAllBeforeToggle } from "./modules/collapsibleMenu.js";
import * as splide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";
// import * as splideUrlHash from "https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-url-hash@0.3.0/+esm";

// const HashFunction = splideUrlHash.URLHash;
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

slide.on("autoplay:playing", function (rate) {
  //   console.log(rate);
  //   bar.style.width = String(100 * rate) + "%";
});

addPaginationProgress();
