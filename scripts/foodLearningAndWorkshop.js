gsap
  .timeline()
  .fromTo(
    "#hero-image img",
    {
      autoAlpha: 1,
      yPercent: 150,
      scale: 1.5,
    },
    {
      autoAlpha: 1,
      yPercent: 0,
      scale: 1,
      ease: "expo",
      duration: 1.35,
    },
    "+=0.5"
  )

  .fromTo(
    "#text-section",
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      ease: "expo",
      duration: 1.5,
    },
    "-=1"
  );

const imgSection = document.querySelectorAll(".img-section");

imgSection?.forEach((value, index) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: `#img-section-${index + 1}`,
        start: "top center",
        end: "top center",
      },
    })
    .fromTo(`#img-section-${index + 1} img`, { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, stagger: 0.1, duration: 0.85, ease: "expo" });
});
