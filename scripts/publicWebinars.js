gsap
  .timeline({ defaults: { duration: 0.85, ease: "expo" } })
  .fromTo("header h1", { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
  .fromTo("header img", { opacity: 0 }, { opacity: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#webinars-container",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#webinars-container a", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, stagger: 0.05, duration: 0.85, ease: "expo" });
