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
    },
    "+=0.25"
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
console.log(imgSection);

imgSection.forEach((value, index) => {
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
