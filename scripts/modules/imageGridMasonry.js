export const initImageGridMasonry = (selector = ".dynamic-img-grid div") => {
  const images = document.querySelectorAll(selector);
  let step = 6; // Initial step
  let indexTarget = 1; // Start index
  let row = 1;
  let col = 1;

  images?.forEach((image, index) => {
    if (index === indexTarget - 1) {
      indexTarget += step;
      image.style.gridRow = `${row} / span 2`;
      image.style.gridColumn = `${col} / span 2`;
      col = col === 1 ? 2 : 1;
      row += 2;
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: image,
          start: "-25% center",
          end: "top center",
        },
      })
      .fromTo(image, { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.85, ease: "expo" });
  });
};
