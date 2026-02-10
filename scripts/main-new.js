import { animate, defaultEase } from "./modules/animation.js";

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
      [mobileNavMenu, { opacity: [0, 1], visibility: ["hidden", "visible"] }, { ease: defaultEase, duration: 0.5 }],
      ["#mobile-nav-menu-content", { y: "0%" }, { duration: 0.5, ease: defaultEase, at: "<-0.05" }],
    ];

    animate(sequence);
  } else if (menuVisible === false && mobileNavMenu) {
    const sequence = [
      ["#mobile-nav-menu-content", { y: "-100%" }, { duration: 0.5, ease: defaultEase }],
      [mobileNavMenu, { opacity: 0, y: "0%", visibility: ["visible", "hidden"] }, { ease: defaultEase, duration: 0.5, at: "<+0.2" }],
    ];

    animate(sequence);
  }
};

toggleButton?.addEventListener("click", () => toggleMobileNavMenu());

// Navbar Scroll to hide

let prevScrollY = window.scrollY || 0;
let isHidden = false;

window.addEventListener("scroll", () => {
  const currentY = window.scrollY;

  if ((currentY < prevScrollY || currentY <= 80) && isHidden) {
    animate("#navbar", { y: "0%" }, { ease: defaultEase });
    isHidden = false;
  }

  if (currentY > prevScrollY && currentY > 80 && !isHidden) {
    animate("#navbar", { y: "-100%" }, { ease: defaultEase });
    isHidden = true;
  }

  prevScrollY = currentY;
});
