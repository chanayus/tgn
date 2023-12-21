const initGallery = () => {
  const galleryColumns = document.querySelectorAll(".gallery-col");

  galleryColumns?.forEach((col) => {
    const childElement = col.firstElementChild;
    if (childElement) {
      const duplicatedElement = childElement.cloneNode(true);
      col.appendChild(duplicatedElement);
    }
  });

  gsap.fromTo(
    ".img-col-odd",
    { yPercent: -100 },
    {
      yPercent: 0,
      repeat: -1,
      duration: 30,
      ease: "linear",
    }
  );

  gsap.fromTo(
    ".img-col-even",
    { yPercent: 0 },
    {
      yPercent: -100,
      repeat: -1,
      duration: 30,
      ease: "linear",
    }
  );
};

initGallery();

gsap
  .timeline()
  .fromTo("#header-image", { autoAlpha: 0, scale: 1.25 }, { autoAlpha: 1, scale: 1, ease: "", duration: 1 }, "+=0.2")
  .fromTo("#cia-logo", { autoAlpha: 0 }, { autoAlpha: 1, ease: "linear", duration: 0.3 }, "-=0.5")
  .fromTo(".header-text h1", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.25, ease: "expo", duration: 1 }, "+=0.1");

gsap.fromTo(
  ".section-1-img-container img",
  { autoAlpha: 0, scale: 0.9 },
  { scrollTrigger: { trigger: ".section-1-img-container", start: "top center" }, autoAlpha: 1, scale: 1, ease: "expo", duration: 1, stagger: 0.05 }
);

gsap.fromTo("#never-stop-section", { autoAlpha: 0 }, { scrollTrigger: { trigger: "#never-stop-section", start: "top center" }, autoAlpha: 1, ease: "expo", duration: 1, stagger: 0.05 });

gsap.fromTo(
  "#data-block-section > div",
  { autoAlpha: 0, y: 25},
  { scrollTrigger: { trigger: "#data-block-section", start: "top center" }, autoAlpha: 1, y: 0, ease: "expo", duration: 1, stagger: 0.1 }
);
