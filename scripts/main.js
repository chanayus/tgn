import "./modules/collapsibleMenu.js";
import "./modules/mobileNavMenu.js";

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
    console.log(reverse);

    if (marquee.dataset?.direction === "y") {
      console.log("y");

      gsap.fromTo(
        marquee.querySelectorAll(".marquee-item"),
        { yPercent: reverse ? -100 : 0 },
        {
          yPercent: reverse ? 0 : -100,
          repeat: -1,
          duration: duration,
          ease: "linear",
        }
      );
    } else {
      gsap.fromTo(
        marquee.querySelectorAll(".marquee-item"),
        { xPercent: reverse ? -100 : 0 },
        {
          xPercent: reverse ? 0 : -100,
          repeat: -1,
          duration: duration,
          ease: "linear",
        }
      );
    }
  });
};

initMarquee();
