import { animateBreakpoint, animate, scroll, inView, stagger } from "./modules/animation.js";

// Every block below guards on the elements it animates. Without that, one missing
// element throws and takes the rest of the module — including the filter and the
// accordion — down with it.

const lines = document.querySelectorAll(".line");

lines.forEach((line) => {
  inView(line, () => {
    animate(line, { pathLength: [0, 1] }, { duration: 0.5 });
  });
});

// Hero section

const heroSection = document.querySelector("#hero-section");
const ellipse = heroSection?.querySelector("#ellipse ellipse");
const heroBg = heroSection?.querySelector("#hero-bg");

if (heroSection && ellipse && heroBg) {
  const heroSequence = [
    [ellipse, { ry: [0, 280], scale: [1, 1.1] }],
    [heroBg, { scale: [1, 1.25], y: [0, 200] }, { at: "<" }],
  ];

  animateBreakpoint("(min-width: 1024px)", () => {
    const animation = animate(heroSequence);

    const scrollAnimate = scroll(animation, { target: heroSection, offset: ["center center", "150% center"] });

    return () => {
      const revert = [
        [ellipse, { ry: 0, scale: 1 }],
        [heroBg, { scale: 1, y: 0 }],
      ];
      animate(revert, { duration: 0 });

      scrollAnimate();
    };
  });
}

// Intro section

const introSection = document.querySelector("#intro-section");
const bike = document.querySelector("#bike");
const wheel = bike?.querySelector("#bike-wheel");

if (introSection && bike && wheel) {
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
}

// Specialist section

const specialistSection = document.querySelector("#specialist-section");
const human = specialistSection?.querySelector("#human");

if (specialistSection && human) {
  animate(human, { x: [0, -16, 0], y: [0, 16, -8, 0] }, { repeat: Infinity, duration: 10 });

  animateBreakpoint("(min-width: 1024px)", () => {
    const specialistAnimate = animate(human, { x: ["120%", "0%"], rotate: [12, 0] }, { duration: 1 });

    const scrollAnimate = scroll(specialistAnimate, { target: specialistSection, offset: ["start end", "end end"] });

    return () => {
      animate(human, { x: "0%", rotate: 0 }, { duration: 0 });

      scrollAnimate();
    };
  });
}

// Theme strip section

const themeStripSection = document.querySelector("#theme-strip-section");
const pineapple = themeStripSection?.querySelector("#pineapple");

if (themeStripSection && pineapple) {
  animate(pineapple, { x: [0, -16, 0, -4, 0], y: [0, 16, -8, 0] }, { repeat: Infinity, duration: 10 });

  animateBreakpoint("(min-width: 1024px)", () => {
    const pineappleAnimate = animate(pineapple, { x: ["-120%", "0%"], rotate: [12, 0] }, { duration: 1 });

    const scrollAnimate = scroll(pineappleAnimate, { target: themeStripSection, offset: ["start end", "center end"] });

    return () => {
      animate(pineapple, { x: "0%", rotate: 0 }, { duration: 0 });

      scrollAnimate();
    };
  });
}

// The 4 theme pills pop in one after another instead of using the shared data-reveal fade.

const themePills = themeStripSection?.querySelectorAll(".theme-pill");

if (themeStripSection && themePills?.length) {
  animate(themePills, { opacity: 0, y: 48, scale: 0.6 }, { duration: 0 });

  inView(
    themeStripSection,
    () => {
      animate(themePills, { opacity: [0, 1], y: [48, 0], scale: [0.6, 1] }, { type: "spring", visualDuration: 0.5, bounce: 0.7, delay: stagger(0.12) });
    },
    { amount: 0.4 },
  );
}

// About section - count the funnel stats up when they scroll into view.
// Targets are read from the markup ("100+" -> 100 with a "+" suffix) so the numbers
// live in one place and still render for anyone without JS.

const funnelRow = document.querySelector(".funnel-row");

const funnelStats = [...(funnelRow?.querySelectorAll(".funnel-step b") ?? [])]
  .map((el) => {
    const [, digits, suffix] = el.textContent.trim().match(/^(\d+)(\D*)$/) ?? [];
    return { el, target: Number(digits), suffix: suffix ?? "", final: el.textContent };
  })
  .filter(({ target }) => Number.isFinite(target));

if (funnelRow && funnelStats.length) {
  funnelStats.forEach(({ el, suffix }) => (el.textContent = `0${suffix}`));

  inView(
    funnelRow,
    () => {
      funnelStats.forEach(({ el, target, suffix, final }) => {
        animate(0, target, {
          duration: 1.4,
          ease: [0.25, 1, 0.5, 1],
          onUpdate: (value) => (el.textContent = `${Math.round(value)}${suffix}`),
          onComplete: () => (el.textContent = final),
        });
      });
    },
    { amount: 0.6 },
  );
}

// 47 Designers section - reveal the grid as a single container.
// This cannot use data-reveal: that waits for 30% of the element to be visible, and the
// grid is several viewports tall, so the threshold would never be met. "some" fires as
// soon as any part of it scrolls in.

const designerGrid = document.querySelector("#designer-grid");

if (designerGrid) {
  animate(designerGrid, { opacity: 0, y: 25 }, { duration: 0 });

  inView(
    designerGrid,
    () => {
      animate(designerGrid, { opacity: [0, 1], y: [25, 0] }, { duration: 1, ease: [0.25, 1, 0.5, 1] });
    },
    { amount: "some" },
  );
}

// 47 Designers section - theme filter

const filterButtons = document.querySelectorAll(".designer-filter-btn");
const designerCards = document.querySelectorAll(".designer-card");
const emptyNote = document.querySelector("#designer-grid-empty");

const applyFilter = (theme) => {
  let visible = 0;

  designerCards.forEach((card) => {
    const match = theme === "all" || card.dataset.theme === theme;
    card.classList.toggle("is-filtered-out", !match);
    if (match) visible++;
  });

  emptyNote?.classList.toggle("hidden", visible > 0);
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((other) => {
      const isTarget = other === button;
      other.classList.toggle("is-active", isTarget);
      other.setAttribute("aria-pressed", String(isTarget));
    });

    applyFilter(button.dataset.filter);
  });
});

// The About accordion needs no code here: it uses the shared .collapsible component,
// wired up by scripts/modules/collapsibleMenu.js which main.js already imports.
