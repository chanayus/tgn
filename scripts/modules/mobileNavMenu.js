let menuVisible = false;
const mobileNavMenu = document.querySelector("#mobile-nav-menu");
const openButton = document.querySelector("#mobile-nav-menu-open");
const closeButton = document.querySelector("#mobile-nav-menu-close");

const toggleMobileNavMenu = (type) => {
  document.body.style.overflow = type === "open" ? "hidden" : "unset";

  if (type === "open" && mobileNavMenu) {
    menuVisible = true;
    gsap
      .timeline()
      .set(mobileNavMenu, { pointerEvents: "auto" })
      .fromTo(mobileNavMenu, { autoAlpha: 0, scale: 0.9 }, { autoAlpha: 1, scale: 1, duration: 1, ease: "expo" })
      .fromTo("#mobile-menu-list > *", { autoAlpha: 0, y: -75 }, { autoAlpha: 1, y: 0, stagger: 0.075, duration: 1, ease: "expo" }, "-=0.75")
      .fromTo("#mobile-nav-img", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: "expo" }, "-=1")
      .fromTo("#mobile-nav-top", { autoAlpha: 0, pointerEvents: "none" }, { autoAlpha: 1, pointerEvents: "auto", ease: "expo" }, "-=0.8");
  } else if (type === "close" && mobileNavMenu) {
    gsap.set(mobileNavMenu, { pointerEvents: "none" });
    gsap.to(mobileNavMenu, { autoAlpha: 0, duration: 0.5, ease: "expo" });
  }
};

openButton?.addEventListener("click", () => toggleMobileNavMenu("open"));
closeButton?.addEventListener("click", () => toggleMobileNavMenu("close"));

toggleMobileNavMenu("close");
