const regions = document.querySelectorAll(".region");
const closeModalButton = document.querySelector("#close-region-modal");
const regionModal = document.querySelector("#region-modal");
const modalContents = document.querySelectorAll(".modal-content");

const modalBox = document.querySelector("#region-modal #modal");
const modalTitle = document.querySelector("#modal-title");
const modalBackdrop = document.querySelector("#modal-backdrop");

const showTargetContent = (title, target) => {
  modalTitle.textContent = title;
  modalContents.forEach((content) => {
    if (content.id === target) {
      content.classList.remove("hidden");
    } else {
      content.classList.add("hidden");
    }
  });
};

regions?.forEach((region) => {
  region.addEventListener("click", () => {
    console.log(region.dataset.popupTitle);
    region.dataset.popupTitle && showTargetContent(region.dataset.popupTitle, region.dataset.popupTarget);

    gsap.timeline({ defaults: { duration: 0.5, ease: "expo" } }).fromTo(regionModal, { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0 });

    gsap.fromTo(modalBox, { backdropFilter: "blur(0px)" }, { backdropFilter: "blur(10px)", delay: 0.25, duration: 10 });

    window.addEventListener(
      "click",
      (e) => {
        if (modalBox && !modalBox.contains(e.target)) {
          gsap.fromTo(regionModal, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: 25, duration: 0.5, ease: "expo" });
        }
      },
      {
        once: true,
        capture: true,
      }
    );
  });
});

closeModalButton.addEventListener("click", () => {
  gsap.fromTo(regionModal, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: 25, duration: 0.5, ease: "expo" });
});

gsap
  .timeline({
    defaults: { duration: 0.85, ease: "expo" },
  })
  .fromTo("#main-heading", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0 }, "+=0.25")
  .fromTo("#manager-section h3", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0 })
  .fromTo("#manager-section .storytelling-card", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, stagger: 0.05 }, "<");

gsap
  .timeline({
    defaults: { duration: 0.85, ease: "expo" },
    scrollTrigger: {
      trigger: "#region-section",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#ring-border", { autoAlpha: 0, rotate: 25, scale: 0.75 }, { autoAlpha: 1, rotate: 0, scale: 1 })
  .fromTo(".region-wrapper", { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, stagger: 0.1 })
  .fromTo(".region-badge", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.1 }, "-=0.25")
  .fromTo("#region-link", { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1 }, "-=0.5");

const regionLinkPaths = document.querySelectorAll("#region-link path");

regionLinkPaths?.forEach((path) => {
  const pathLength = path.getTotalLength();

  gsap.set(path, { strokeDashoffset: 0 });
  gsap.fromTo(path, { strokeDashoffset: 0 }, { strokeDashoffset: pathLength, repeat: -1, ease: "linear", duration: 5, delay: 0.85 });
});
