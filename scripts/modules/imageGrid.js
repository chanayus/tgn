export const initImageGrid = () => {
  const images = document.querySelectorAll(".dynamic-img-grid div");
  let step = 6; // Initial step
  let index = 1; // Start index
  let row = 1;
  let col = 1;
  images?.forEach((image, i) => {
    if (i === index - 1) {
      console.log(i, `${col} / span 2`, `${row} / span 2`);
      index += step;
      image.style.gridRow = `${row} / span 2`;
      image.style.gridColumn = `${col} / span 2`;
      col = col === 1 ? 2 : 1;
      row += 2;
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: image,
          start: "top center",
          end: "top center",
        },
      })
      .fromTo(image, { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.85, ease: "expo" });
  });
};
