import { openVideoPopup, setVideoSrc } from "./modules/videoPopup.js";

const videoSection = document.querySelector("#video-section");
const playVideoButton = document.querySelector("#video-section .play-video-button");

playVideoButton.addEventListener("click", () => {
  openVideoPopup();
  setVideoSrc(videoSection.dataset.url);
});

gsap
  .timeline({ defaults: { duration: 0.85, ease: "expo" } })
  .fromTo("hgroup h1", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "+=0.25")
  .fromTo("hgroup p", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "-=0.5")
  .fromTo("article", { opacity: 0 }, { opacity: 1 }, "-=0.5");

gsap
  .timeline({
    defaults: { duration: 0.85, ease: "expo" },
    scrollTrigger: {
      trigger: "#other-webinars-section",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#other-webinars-section h4", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0 })
  .fromTo("#other-webinars-section a", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.05 }, "-=0.5");