gsap
  .timeline({ defaults: { duration: 0.85, ease: "expo" } })
  .fromTo("h1#main-heading", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "+=0.25")
  .fromTo("#category", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "-=0.5")
  .fromTo("article", { opacity: 0 }, { opacity: 1 }, "-=0.5")
  .fromTo("#podcast-container", { autoAlpha: 0 }, { autoAlpha: 1 }, "-=0.75")
  .fromTo("#podcast-container a", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.2 }, "<");
