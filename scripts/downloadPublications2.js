gsap
  .timeline({ defaults: { duration: 0.85, ease: "expo" } })
  .fromTo("h1#main-heading", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "+=0.25")
  .fromTo("#category", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "-=0.5")
  .fromTo("#hero-image", { opacity: 0 }, { opacity: 1 }, "-=0.5")
  .fromTo("#post-image-container", { autoAlpha: 0 }, { autoAlpha: 1 }, "-=0.75");

const images = document.querySelectorAll("#post-image-container img");

images?.forEach((img) => {
  gsap.fromTo(
    img,
    { autoAlpha: 0, scale: 0.9 },
    {
      autoAlpha: 1,
      scale: 1,
      scrollTrigger: {
        trigger: img,
        start: "top center",
        end: "top center",
      },
    }
  );
});
