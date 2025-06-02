import "./modules/collapsibleMenu.js";
import "./modules/mobileNavMenu.js";

export const initMarquee = () => {
  const gallery = document.querySelector(".marquee");

  if (gallery === null) return;

  const childElement = gallery.firstElementChild;

  if (childElement) {
    for (let i = 0; i <= 3; i++) {
      const duplicatedElement = childElement.cloneNode(true);
      gallery.appendChild(duplicatedElement);
    }
  }

  const num = -100;
  gsap.fromTo(
    ".marquee-item",
    { xPercent: 0 },
    {
      xPercent: num,
      repeat: -1,
      duration: 25,
      ease: "linear",
    }
  );
};

initMarquee();
