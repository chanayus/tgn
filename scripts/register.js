gsap
  .timeline()
  .fromTo("#hero-section-bg", { autoAlpha: 0, scale: 1.2 }, { autoAlpha: 1, scale: 1, duration: 1.5, ease: "expo" }, "+=0.25")
  .fromTo("#hero-section-info", { autoAlpha: 0 }, { autoAlpha: 1, ease: "expo", duration: 2 }, "-=0.75")
  .fromTo("#scrolldown-mouse", { autoAlpha: 0 }, { autoAlpha: 1, duration: 2, ease: "expo" }, "<");

gsap
  .timeline({ repeat: -1, repeatDelay: 0, ease: "none" })
  .fromTo("#scrolldown-mouse-wheel", { y: 0, duration: 1, autoAlpha: 0 }, { y: 0, duration: 1, autoAlpha: 1 })
  .to("#scrolldown-mouse-wheel", { y: 14, duration: 1, autoAlpha: 0 })
  .to("#scrolldown-mouse-wheel", { y: 0, duration: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#activities-section",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#activities-section h2", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, ease: "expo", duration: 0.75 })
  .fromTo("#activities-section #activities-list-container > div", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.15, ease: "expo", duration: 0.75 }, "-=0.5");

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#speakers-section",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#speakers-section h2", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, ease: "expo", duration: 0.75 })
  .fromTo("#speakers-img", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, ease: "expo", duration: 0.75 }, "-=0.2")
  .fromTo("#speakers-info > *", { autoAlpha: 0, x: -25 }, { autoAlpha: 1, x: 0, ease: "expo", stagger: 0.15, duration: 0.75 }, "-=0.5");

const initGallery = () => {
  const gallery = document.querySelector("#gallery-marquee");

  const childElement = gallery.firstElementChild;

  if (childElement) {
    for (let i = 0; i <= 3; i++) {
      const duplicatedElement = childElement.cloneNode(true);
      gallery.appendChild(duplicatedElement);
    }
  }
  gsap.fromTo(
    ".gallery-item",
    { xPercent: 0 },
    {
      xPercent: -101.05,
      repeat: -1,
      duration: 20,
      ease: "linear",
    }
  );
};

initGallery();
