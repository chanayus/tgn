gsap
  .timeline()
  .fromTo(
    "#hero-image",
    {
      autoAlpha: 0,
      scale: 1.2,
    },
    {
      autoAlpha: 1,
      scale: 1,
      ease: "expo",
      duration: 1.5,
    }
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

[1, 2, 3, 4].forEach((value) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: `#img-section-${value}`,
        start: "top center",
        end: "top center",
      },
    })
    .fromTo(`#img-section-${value} img`, { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, stagger: 0.1, duration: 0.85, ease: "expo" });
});
