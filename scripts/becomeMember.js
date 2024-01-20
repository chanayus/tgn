gsap
  .timeline()
  .fromTo("header", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.85, ease: "expo" })
  .fromTo("header h2", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.85, ease: "expo" }, "-=0.8")
  .fromTo("header a", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.85, ease: "expo" }, "-=0.5")
  .fromTo("header h3", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.85, ease: "expo" }, "-=0.5")
  .fromTo("header #header-logo", { autoAlpha: 0, scale: 0.9, rotate: "-10deg" }, { autoAlpha: 1, scale: 1, duration: 0.85, rotate: "0deg", ease: "expo" }, "-=0.35")
  .fromTo("header .benefit-index", { autoAlpha: 0, scale: 0.9, y: 25 }, { autoAlpha: 1, scale: 1, y: 0, stagger: 0.05, duration: 0.85, ease: "expo" }, "-=0.35")
  .fromTo("header .benefit-line", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.85, ease: "expo" }, "-=0.35")
  .fromTo("header p", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.85, ease: "expo" }, "-=0.75");

gsap.fromTo(
  ".gallery-item-1 .image-wrapper",
  { yPercent: 0 },
  {
    yPercent: -101.05,
    repeat: -1,
    duration: 20,
    ease: "linear",
  }
);

gsap.fromTo(
  ".gallery-item-2 .image-wrapper",
  { yPercent: -101.05 },
  {
    yPercent: 0,
    repeat: -1,
    duration: 30,
    ease: "linear",
  }
);

gsap.fromTo(
  ".gallery-item-3 .image-wrapper",
  { yPercent: 0 },
  {
    yPercent: -101.05,
    repeat: -1,
    duration: 25,
    ease: "linear",
  }
);

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#member-section",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#member-section h2", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, ease: "expo", duration: 0.75 })
  .fromTo("#member-section .member-card", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, stagger: 0.1, ease: "expo", duration: 0.75 }, "-=0.2");

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#partner-section",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#partner-section h2", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, ease: "expo", duration: 0.75 })
  .fromTo("#partner-section img", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, stagger: 0.1, ease: "expo", duration: 0.75 }, "-=0.2");
