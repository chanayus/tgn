gsap
  .timeline({ defaults: { duration: 0.85, ease: "expo" } })
  .fromTo("h1#main-heading", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "+=0.25")
  .fromTo("article", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "-=0.5");
