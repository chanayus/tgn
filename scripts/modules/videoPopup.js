const videoPopup = document.querySelector("#video-popup");
const iFrame = document.querySelector("#video-popup iframe");
const closeVideoPopupButton = document.querySelector("#close-video-popup");

export const openVideoPopup = () => {
  gsap.fromTo(videoPopup, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
};

export const setVideoSrc = (src) => {
  iFrame.src = src;
};

closeVideoPopupButton?.addEventListener("click", (e) => {
  gsap.fromTo(videoPopup, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.25 }).then(() => {
    setVideoSrc("");
  });
});
