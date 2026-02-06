import "./modules/collapsibleMenu.js";
import "./modules/mobileNavMenu.js";
import "./modules/animation.js";

import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

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
