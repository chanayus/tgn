import { animate, defaultEase, inView } from "../main.js";

const sections = document.querySelectorAll("[data-reveal]");

sections.forEach((section) => {
  const amount = Number(section.getAttribute("data-amount")) || 0.3;
  const delay = Number(section.getAttribute("data-delay")) || 0;

  animate(section, { opacity: 0, y: 25 }, { duration: 0 });
  inView(
    section,
    () => {
      animate(
        section,
        { opacity: [0, 1], y: [25, 0] },
        {
          duration: 1,
          easing: defaultEase,
          delay: delay,
        },
      );
    },
    { amount: amount },
  );
});
