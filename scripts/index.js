import { animate, defaultEase, scroll, stagger } from "./modules/animation.js";

const stackCards = document.querySelectorAll(".stackcard");

stackCards?.forEach((card) => {
  const animation = animate(card, { scale: [1, 0.8] });
  scroll(animation, { target: card, offset: ["start center", "end center"] });
});

function playSlideText(slide, delay = 0) {
  const textContent = slide?.querySelector(".text-content");
  if (!textContent) return;

  const textItems = Array.from(textContent.children);

  animate(textContent, { opacity: 0 }, { duration: 0 });
  animate(textItems, { opacity: 0, y: 20, filter: "blur(4px)" }, { duration: 0 });

  animate(textContent, { opacity: 1 }, { duration: 0, delay });
  animate(textItems, { opacity: [0, 1], y: [20, 0], filter: ["blur(4px)", "blur(0px)"] }, { delay: stagger(0.175, { startDelay: delay }), ease: defaultEase, duration: 1.5 });
}

document.querySelectorAll("#hero-slide .swiper-slide .text-content").forEach((el) => {
  animate(el, { opacity: 0 }, { duration: 0 });
  animate(Array.from(el.children), { opacity: 0, y: 20, filter: "blur(4px)" }, { duration: 0 });
});

new Swiper("#hero-slide", {
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".hero-slide-next",
    prevEl: ".hero-slide-prev",
  },
  on: {
    init(swiper) {
      playSlideText(swiper.slides[swiper.activeIndex], 0.5);
    },
    slideChangeTransitionStart(swiper) {
      playSlideText(swiper.slides[swiper.activeIndex], 0.5);
    },
  },
});
