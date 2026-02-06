import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

let menuVisible = false;
const mobileNavMenu = document.querySelector("#mobile-nav-menu");
const toggleButton = document.querySelector("#mobile-nav-menu-toggle");

const toggleMobileNavMenu = () => {
  menuVisible = !menuVisible;

  if (menuVisible === true && mobileNavMenu) {
    const sequence = [
      ["#mobile-nav-menu-content", { y: "-100%" }, { duration: 0 }],
      ["#mobile-nav-menu", { opacity: [0, 1], visibility: ["hidden", "visible"] }, { ease: [0.25, 1, 0.5, 1], duration: 0.75 }],
      ["#mobile-nav-menu-content", { y: "0%" }, { duration: 0.75, ease: [0.25, 1, 0.5, 1], at: "<-0.75" }],
    ];

    animate(sequence);
  } else if (menuVisible === false && mobileNavMenu) {
    const sequence = [
      ["#mobile-nav-menu-content", { y: "-100%" }, { duration: 0.75, ease: [0.25, 1, 0.5, 1] }],
      [mobileNavMenu, { opacity: 0, y: "0%", visibility: ["visible", "hidden"] }, { ease: [0.25, 1, 0.5, 1], duration: 0.75, at: "<-0.5" }],
    ];

    animate(sequence);
  }
};

toggleButton?.addEventListener("click", () => toggleMobileNavMenu());
