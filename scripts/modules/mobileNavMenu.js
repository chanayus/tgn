let menuVisible = false;
const mobileNavMenu = document.querySelector("#mobile-nav-menu");
const toggleButton = document.querySelector("#mobile-nav-menu-toggle");

const toggleMobileNavMenu = () => {
  menuVisible = !menuVisible;

  // document.body.style.overflow = menuVisible === true ? "hidden" : "unset";

  if (menuVisible === true && mobileNavMenu) {
    gsap
      .timeline()
      .set("#mobile-nav-menu-content", { yPercent: -100 })
      .fromTo(mobileNavMenu, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: "expo" })
      .to("#mobile-nav-menu-content", { yPercent: 0, duration: 0.75, ease: "expo" }, "-=0.75");
  } else if (menuVisible === false && mobileNavMenu) {
    gsap.timeline().to("#mobile-nav-menu-content", { yPercent: -100, duration: 0.75, ease: "expo" }).to(mobileNavMenu, { autoAlpha: 0, duration: 1, ease: "expo" }, "-=0.5");
  }
};

toggleButton?.addEventListener("click", () => toggleMobileNavMenu());
