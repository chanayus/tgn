gsap
  .timeline({
    scrollTrigger: {
      trigger: "#video-gird-section",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#video-gird-section figure", { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, stagger: 0.05, duration: 0.85, ease: "expo" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#text-section",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#text-section h2", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.85, ease: "expo" })
  .fromTo("#text-section p", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.85, ease: "expo" },"-=0.25");
