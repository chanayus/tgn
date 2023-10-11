import * as splide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const navbar = document.querySelector("#navbar");

navbar?.classList.add("gold-theme");

gsap
  .timeline()
  .fromTo("#hero-section-bg", { autoAlpha: 0, scale: 1.2 }, { autoAlpha: 1, scale: 1, duration: 1.5, ease: "expo" }, "+=0.25")
  .fromTo("#hero-section-info", { autoAlpha: 0 }, { autoAlpha: 1, ease: "expo", duration: 2 }, "-=0.75");

const initGallery = () => {
  const gallery = document.querySelector("#gallery-marquee");
  console.log(gallery);
  const childElement = gallery.firstElementChild;
  console.log(gallery);
  if (childElement) {
    for (let i = 0; i <= 3; i++) {
      const duplicatedElement = childElement.cloneNode(true);
      gallery.appendChild(duplicatedElement);
    }
  }
  gsap.fromTo(
    ".gallery-item",
    { xPercent: 0 },
    {
      xPercent: -101.05,
      repeat: -1,
      duration: 20,
      ease: "linear",
    }
  );
};

initGallery();

const masterSlide = new splide.Splide("#storytelling-container", {
  perPage: 4,
  drag: true,
  perMove: 1,
  pagination: false,
  gap: "1rem",
  breakpoints: {
    1024: {
      perMove: 1,
      padding: { left: "1.25rem", right: "1.25rem" },
    },
    960: {
      perMove: 1,
      drag: "free",
    },
    640: {
      perPage: 1,
      perMove: 1,
      fixedWidth: "16rem",
    },
  },
}).mount();

const imgSlide = new splide.Splide("#img-slide", {
  type: "loop",
  padding: "25vw",
  arrows: false,
  focus: "center",
  updateOnMove: true,
  interval: 5000,
  autoplay: true,
}).mount();
