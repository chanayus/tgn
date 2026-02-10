import { animateBreakpoint, animate, scroll, inView } from "./modules/animation.js";

const lines = document.querySelectorAll(".line");

lines?.forEach((line) => {
  inView(line, () => {
    animate(line, { pathLength: [0, 1] }, { duration: 0.5 });
  });
});

// Hero section

const heroSection = document.querySelector("#hero-section");

const ellipse = heroSection.querySelector("#ellipse ellipse");

const heroSequence = [
  [ellipse, { ry: [0, 280], scale: [1, 1.1] }],
  ["#hero-bg", { scale: [1, 1.25] }, { at: "<" }],
];

const animation = animate(heroSequence);

scroll(animation, { target: heroSection, offset: ["center center", "150% center"] });

// Intro section

const introSection = document.querySelector("#intro-section");
const bike = document.querySelector("#bike");
const wheel = bike.querySelector("#bike-wheel");

animate(bike, { x: [0, -16, 0], y: [0, 16, -8, 0] }, { repeat: Infinity, duration: 10 });

const bikeSequence = [
  [bike, { x: ["-100%", "0%"] }],
  [wheel, { rotate: [0, 360] }, { at: "<" }],
];

animateBreakpoint("(min-width: 1024px)", () => {
  const introAnimate = animate(bikeSequence, { duration: 1 });

  const scrollAnimate = scroll(introAnimate, { target: introSection, offset: ["start center", "end center"] });

  return () => {
    const revert = [
      [bike, { x: "0%", rotate: 0 }],
      [wheel, { rotate: 0 }],
    ];
    animate(revert, { duration: 0 });

    scrollAnimate();
  };
});

// KTC section

const specialistSection = document.querySelector("#specialist-section");
const human = specialistSection.querySelector("#human");

animate(human, { x: [0, -16, 0], y: [0, 16, -8, 0] }, { repeat: Infinity, duration: 10 });

animateBreakpoint("(min-width: 1024px)", () => {
  const specialistAnimate = animate(human, { x: ["120%", "0%"], rotate: [12, 0] }, { duration: 1 });

  const scrollAnimate = scroll(specialistAnimate, { target: specialistSection, offset: ["start end", "end end"] });

  return () => {
    animate(human, { x: "0%", rotate: 0 }, { duration: 0 });

    scrollAnimate();
  };
});

// 9 Provinces Section

const slide = new Swiper("#provinces-slide", {
  speed: 750,
  spaceBetween: 20,

  centeredSlides: true,
  navigation: {
    nextEl: ".provinces-slide-next",
    prevEl: ".provinces-slide-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.75,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function updateSlideTextContent() {
  const info = document.querySelectorAll(".provinces-info");
  info?.forEach((item, index) => {
    animate(item, {
      opacity: index === slide.activeIndex ? 1 : 0,
    });
  });
}

slide.on("slideChange", () => updateSlideTextContent());
updateSlideTextContent();

// GuideBook section

const guideBookSection = document.querySelector("#guidebook-section");
const pineapple = guideBookSection.querySelector("#pineapple");

animate(pineapple, { x: [0, -16, 0, -4, 0], y: [0, 16, -8, 0] }, { repeat: Infinity, duration: 10 });

animateBreakpoint("(min-width: 1024px)", () => {
  const specialistAnimate = animate(pineapple, { x: ["-120%", "0%"], rotate: [12, 0] }, { duration: 1 });

  const scrollAnimate = scroll(specialistAnimate, { target: guideBookSection, offset: ["start end", "center end"] });

  return () => {
    animate(pineapple, { x: "0%", rotate: 0 }, { duration: 0 });

    scrollAnimate();
  };
});
