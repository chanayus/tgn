import * as splide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm";

let paginationDot;
let slideInterval;
const paginationContainer = document.querySelector("#slide-pagination");
const imageSlide = document.querySelectorAll(".image-slide-content");
const textSlideContent = document.querySelectorAll(".slide-content");
const slideSection = document.querySelector("#slide-section");

let currentSlidePage = 0;

const updatePagination = () => {
  paginationDot.forEach((dot, index) => {
    dot.className = `${index === currentSlidePage ? "active" : ""} pagination-dot`;
  });
};

const playSlideAnimation = (currentIndex, nextIndex) => {
  gsap
    .timeline()
    .to(imageSlide[currentIndex], { autoAlpha: 0, duration: 0.5 }, 0)
    .to(textSlideContent[currentIndex], { autoAlpha: 0, duration: 0.5 }, 0)
    .set([textSlideContent[currentIndex], imageSlide[currentIndex]], { display: "none" })
    .set([textSlideContent[nextIndex], imageSlide[nextIndex]], { display: "block" })
    .fromTo(imageSlide[nextIndex], { autoAlpha: 0, scale: 1.1 }, { autoAlpha: 1, scale: 1, ease: "expo", duration: 1.5 })
    .fromTo(textSlideContent[nextIndex], { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, ease: "expo", duration: 0.5 }, "-=1");

  currentSlidePage = nextIndex;
  updatePagination();
};

const initSlide = () => {
  textSlideContent?.forEach((element, index) => {
    if (index !== currentSlidePage) {
      gsap.set(element, { display: "none", autoAlpha: 0 });
      if (textSlideContent[index]) {
        gsap.set(imageSlide[index], { display: "none", autoAlpha: 0 });
      }
    }
    paginationContainer.innerHTML += `
      <button class="${index === currentSlidePage ? "active" : ""} pagination-dot"></button>
    `;
  });

  paginationDot = document.querySelectorAll("#slide-pagination button");

  paginationDot?.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (currentSlidePage !== index) {
        clearInterval(slideInterval);
        playSlideAnimation(currentSlidePage, index);
        slideInterval = setInterval(() => playSlideAnimation(currentSlidePage, currentSlidePage + 1 > textSlideContent.length - 1 ? 0 : currentSlidePage + 1), 5000);
      }
    });
  });
};

if (textSlideContent.length > 0) {
  initSlide();
  if (textSlideContent.length <= 1) {
    paginationContainer.classList.add("!hidden");
  } else if (textSlideContent.length > 1) {
    slideInterval = setInterval(() => playSlideAnimation(currentSlidePage, currentSlidePage + 1 > textSlideContent.length - 1 ? 0 : currentSlidePage + 1), 5000);
  }
} else {
  slideSection.classList.add("!hidden");
}

// Animate for Hero Section

gsap
  .timeline()
  .fromTo("#hero-section h1", { autoAlpha: 0, y: 75 }, { autoAlpha: 1, y: 0, ease: "expo", duration: 1 }, "+=0.25")
  .fromTo("#hero-section-bg", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.75, ease: "none" }, "+=0.25")
  .fromTo("#scrolldown-mouse", { autoAlpha: 0 }, { autoAlpha: 1, duration: 2, ease: "expo" }, "<");

gsap
  .timeline({ repeat: -1, repeatDelay: 0, ease: "none" })
  .fromTo("#scrolldown-mouse-wheel", { y: 0, duration: 1, autoAlpha: 0 }, { y: 0, duration: 1, autoAlpha: 1 })
  .to("#scrolldown-mouse-wheel", { y: 14, duration: 1, autoAlpha: 0 })
  .to("#scrolldown-mouse-wheel", { y: 0, duration: 1 });
// Animate for Text and Image Section

const textImageSections = document.querySelectorAll(".text-image-section");

textImageSections?.forEach((section, index) => {
  const image = section.querySelector(".section-image");
  const heading = section.querySelector("h2");
  const desc = section.querySelector(".desc");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "-5% center",
      end: "top center",
    },
  });

  tl.fromTo(image, { yPercent: 150, scale: 1.5 }, { yPercent: 0, scale: 1, ease: "expo.inOut", duration: 2 }, "-=0.35")
    .fromTo(heading, { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, ease: "expo", duration: 1 }, "-=1")
    .fromTo(desc, { autoAlpha: 0 }, { autoAlpha: 1, ease: "expo", duration: 1 }, "-=0.5");
});

// Animate for What we do section

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#what-we-do-section",
      start: "top center",
      end: "top center",
    },
  })
  .fromTo("#what-we-do-section .heading-section-text", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.1 })
  .fromTo("#what-we-do-section a", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.2, ease: "expo", duration: 0.75 });

// Handle Story Telling Section & Animate

const slide = new splide.Splide("#storytelling-container", {
  perPage: 4,
  drag: true,
  perMove: 1,
  pagination: false,
  gap: "1rem",
  breakpoints: {
    1024: {
      perPage: 4,
      perMove: 1,
      padding: { left: "1.25rem", right: "1.25rem" },
    },
    960: {
      perPage: 3,
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

const storyTellingCards = document.querySelectorAll("#story-card-container .storytelling-card");
const storyTellingSection = document.querySelector("#storytelling-container");

if (storyTellingCards.length > 0) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: storyTellingSection,
        start: "top center",
        end: "top center",
      },
    })
    .fromTo("#storytelling-heading", { autoAlpha: 0 }, { autoAlpha: 1 })
    .fromTo(storyTellingCards, { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.15, ease: "expo", duration: 0.75 });
} else {
  storyTellingSection.classList.add("!hidden");
}

// StoryTelling Video Popup

const storyTellingVideoPopup = document.querySelector("#video-story-telling");
const storyTellingIFrame = document.querySelector("#video-story-telling iframe");
const closeVideoPopupButton = document.querySelector("#close-video-story-telling");

storyTellingCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    storyTellingIFrame.src = card.dataset.url;
    gsap.fromTo(storyTellingVideoPopup, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
  });
});

closeVideoPopupButton.addEventListener("click", (e) => {
  gsap.fromTo(storyTellingVideoPopup, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.25 }).then(() => {
    storyTellingIFrame.src = "";
  });
});
