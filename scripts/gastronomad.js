import { animate } from "./main.js";

const cardContainer = document.getElementById("img-slide");
const textContainer = document.getElementById("text-slide");
const INTERVAL = 5000; // ms

function updateCardPosition() {
  const cards = Array.from(cardContainer.querySelectorAll(".swipe-card"));
  const texts = Array.from(textContainer.querySelectorAll(".swipe-text"));

  cards.forEach((card, index) => {
    const x = `${index * 10}%`;
    const length = cards.length;

    const scale = 1 - 0.1 * index;

    animate(card, {
      x: x,
      scale: scale,
      opacity: 1,
    });

    card.style.zIndex = length - index;
  });

  texts.forEach((text, index) => {
    const length = texts.length;

    animate(text, {
      opacity: index === 0 ? 1 : 0,
    });

    text.style.zIndex = length - index;
  });
}

function shiftSlide() {
  const cards = Array.from(cardContainer.querySelectorAll(".swipe-card"));
  const texts = Array.from(textContainer.querySelectorAll(".swipe-text"));

  if (cards.length === 0 || texts.length === 0) return;

  const frontCard = cards[0];
  const frontText = texts[0];

  animate(frontText, {
    opacity: 0,
  }).finished.then(() => {
    textContainer.insertBefore(frontText, textContainer.lastChild);
  });

  animate(frontCard, {
    scale: 0.95,
    x: "-5%",
    opacity: 0,
  }).finished.then(() => {
    cardContainer.insertBefore(frontCard, cardContainer.lastChild);
    updateCardPosition();
  });
}

updateCardPosition();
setInterval(shiftSlide, INTERVAL);
