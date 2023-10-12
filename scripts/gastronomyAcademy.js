import * as splide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

const navbar = document.querySelector("#navbar");

navbar?.classList.add("gold-theme");

gsap
  .timeline()
  .fromTo("#hero-section-content", { xPercent: -110 }, { autoAlpha: 1, xPercent: 0, duration: 1.5, ease: "expo.inOut" }, "+=0.25")
  .fromTo("#hero-section-bg", { scale: 1.5 }, { scale: 1, duration: 1.5, ease: "expo" }, "-=0.7")
  .fromTo("#hero-section-info > *", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, ease: "expo", stagger: 0.1, duration: 1 }, "-=0.75");

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
      xPercent: -104,
      repeat: -1,
      duration: 20,
      ease: "linear",
    }
  );
};

initGallery();

const masterSlide = new splide.Splide("#storytelling-container", {
  perPage: 4,
  drag: true,
  perMove: 1,
  rewind: true,
  pagination: false,
  gap: "1rem",
  interval: 2500,
  autoplay: true,
  breakpoints: {
    1024: {
      perMove: 1,
      padding: { left: "1.25rem", right: "1.25rem" },
    },
    960: {
      perMove: 1,
      drag: "free",
    },
    640: {
      perPage: 1,
      perMove: 1,
      fixedWidth: "16rem",
    },
  },
}).mount();

const imgSlide = new splide.Splide("#img-slide", {
  type: "loop",
  padding: "25vw",
  arrows: false,
  focus: "center",
  updateOnMove: true,
  interval: 5000,
  autoplay: true,
  gap: "1.5625rem",
  breakpoints: {
    960: {
      padding: "15vw",
    },
  },
}).mount();

// Master Video Popup
const masterCards = document.querySelectorAll(".master-card");
const masterVideoPopup = document.querySelector("#master-video-popup");
const masterIFrame = document.querySelector("#master-video-popup iframe");
const closeVideoPopupButton = document.querySelector("#close-master-video");

masterCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    masterIFrame.src = card.dataset.url;
    gsap.fromTo(masterVideoPopup, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
  });
});

closeVideoPopupButton.addEventListener("click", (e) => {
  gsap.fromTo(masterVideoPopup, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.25 }).then(() => {
    masterIFrame.src = "";
  });
});
