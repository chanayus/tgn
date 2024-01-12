gsap
  .timeline()
  .set("header > div", { autoAlpha: 1 })
  .fromTo("header img", { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.85, ease: "expo" }, "+=0.25")
  .fromTo("header h2", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, duration: 0.85, ease: "expo" }, "-=0.55")
  .fromTo("header p", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, duration: 0.85, ease: "expo" }, "-=0.55");

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#our-partner-section",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#our-partner-section h2", { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.85, ease: "expo" })
  .fromTo("#our-partner-section a", { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.85, ease: "expo" }, "-=0.55");

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach((item, index) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: item,
        start: "top center",
        end: "top center",
      },
    })
    .fromTo(item.querySelector(".timeline-dot"), { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.85, ease: "expo" }, "-=0.25")
    .fromTo(item.querySelector("figure"), { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.85, ease: "expo" }, "-=0.55")
    .fromTo(item.querySelector("p"), { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.85, ease: "expo" }, "-=0.55");
});

const loadMoreButton = document.querySelector("#loadmore-timeline-button");
const loadMoreSection = document.querySelector("#loadmore-timeline-section");
const timelineSection = document.querySelector("#timeline-section");

console.log(timelineSection);
loadMoreButton.addEventListener("click", () => {
  timelineSection.classList.remove("max-md:max-h-[80rem]");

  loadMoreSection.remove();
});
