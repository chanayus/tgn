import { animate, defaultEase, scroll, stagger } from "./main.js";

const stackCards = document.querySelectorAll(".stackcard");

stackCards?.forEach((card) => {
  const animation = animate(card, { scale: [1, 0.8] });

  scroll(animation, { target: card, offset: ["start center", "end center"] });
});

const sequence = [
  ["header .text-content", { opacity: 1 }, { duration: 0 }],
  ["header .text-content *", { opacity: [0, 1], y: [15, 0] }, { delay: stagger(0.15), ease: defaultEase, duration: 1.5 }],
];

animate(sequence, { delay: 0.5 });

new Swiper("#hero-slide", {
  speed: 1000,
  navigation: {
    nextEl: ".hero-slide-next",
    prevEl: ".hero-slide-prev",
  },
});
