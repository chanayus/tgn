import { animate, inView, scroll, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.33.0/+esm";

export { animate, inView, scroll, stagger };

import "./modules/collapsibleMenu.js";
import "./modules/animation.js";

document.querySelectorAll(".svg-icon")?.forEach((el) => {
  const src = el.getAttribute("data-src");
  el.style.setProperty("--src", `url(${src})`);
});

export const initMarquee = () => {
  const gallery = document.querySelectorAll(".marquee");

  if (gallery === null) return;

  gallery.forEach((marquee) => {
    const childElement = marquee.firstElementChild;

    if (childElement) {
      for (let i = 0; i <= 3; i++) {
        const duplicatedElement = childElement.cloneNode(true);
        marquee.appendChild(duplicatedElement);
      }
    }

    const duration = marquee.dataset?.duration || 30;
    const reverse = marquee.dataset?.reverse ? true : false;

    if (marquee.dataset?.direction === "y") {
      animate(marquee.querySelectorAll(".marquee-item"), { y: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }, { ease: "linear", duration: duration, repeat: Infinity });
    } else {
      animate(marquee.querySelectorAll(".marquee-item"), { x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }, { ease: "linear", duration: duration, repeat: Infinity });
    }
  });
};

initMarquee();

// Toggle Mobile Navigation Menu

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
