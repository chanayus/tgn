import * as splide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

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
      perPage: 1,
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

// Animation

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
      stagger: 0.15,
    },
    "-=0.5"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: `#video-section`,
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#video-section hgroup *", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.25, ease: "expo", duration: 1 })
  .fromTo("#video-section #research-video", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, ease: "expo", duration: 1 }, "-=0.5");

let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: `#pillar-section`,
        start: "center center",
        end: "+=250%",
        pin: true,
        scrub: true,
      },
    })
    .fromTo("#pillar-link-container p", { autoAlpha: 0.25 }, { autoAlpha: 1, stagger: 1 })
    .fromTo("#pillar-image img", { x: "150%", scale: 1.5 }, { x: "0%", scale: 1, stagger: 1 }, "<");

  return () => {
    gsap.set("#pillar-link-container p", { autoAlpha: 1 });
    gsap.set("#pillar-image img", { x: "0%", scale: 1 });
  };
});

mm.add("(max-width: 1023px)", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: `#pillar-section`,
        start: "center center",
        end: "+=250%",
        pin: true,
        scrub: true,
      },
    })

    .fromTo("#pillar-link-container p", { autoAlpha: 0.25 }, { autoAlpha: 1, stagger: 1 })
    .fromTo("#pillar-image img", { autoAlpha: 0, scale: 1.5 }, { autoAlpha: 1, scale: 1, stagger: 1 }, "<");

  return () => {
    gsap.set("#pillar-link-container p", { autoAlpha: 1 });
    gsap.set("#pillar-image img", { autoAlpha: 1, scale: 1 });
  };
});
