gsap.fromTo("header img", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.85, ease: "expo" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#video-gird-section",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#video-gird-section figure", { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, stagger: 0.05, duration: 0.85, ease: "expo" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#text-section",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#text-section h2", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.85, ease: "expo" })
  .fromTo("#text-section p", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.85, ease: "expo" }, "-=0.25");

const storyTellingVideoPopup = document.querySelector("#video-popup");
const storyTellingIFrame = document.querySelector("#video-popup iframe");
const closeVideoPopupButton = document.querySelector("#close-video-popup");

const chapters = document.querySelectorAll("#video-gird-section figure");

chapters.forEach((card) => {
  card.addEventListener("click", (e) => {
    storyTellingIFrame.src = card.dataset.url;
    gsap.fromTo(storyTellingVideoPopup, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
  });
});

closeVideoPopupButton.addEventListener("click", (e) => {
  gsap.fromTo(storyTellingVideoPopup, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.25 }).then(() => {
    storyTellingIFrame.src = "";
  });
});
