gsap
  .timeline({ defaults: { duration: 0.85, ease: "expo" } })
  .fromTo("header", { opacity: 0 }, { opacity: 1 }, "+=0.25")
  .fromTo("#podcast-thumbnail", { opacity: 0 }, { opacity: 1 }, "")
  .fromTo("header #podcast-title", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "-=0.7")
  .fromTo("header #podcast-info", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "-=0.7")
  .fromTo("#media-player", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "-=0.5")
  .fromTo("article", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "<")
  .fromTo("#podcast-container", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "<");
