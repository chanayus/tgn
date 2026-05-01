import { animate, defaultEase, stagger } from "./modules/animation.js";

const highlightListItems = [...document.querySelectorAll(".highlight-list-item")];
const highlightItems = [...document.querySelectorAll(".highlight-item")];
const highlightImages = [...document.querySelectorAll(".highlight-img")];
const highlightPrevButton = document.querySelector(".highlight-prev");
const highlightNextButton = document.querySelector(".highlight-next");

const highlightItemDuration = 0.3;
const highlightChildDuration = 0.45;
const highlightImageDuration = 0.75;
const highlightImageEase = [0.4, 0.8, 0.5, 1];
const bgContainer = document.querySelector(".bg-container");

if (highlightListItems.length > 0) {
  const highlightIndexes = highlightListItems.map((item) => item.dataset.index);
  const highlightItemsByIndex = new Map(highlightItems.map((item) => [item.dataset.index, item]));
  const highlightImagesByIndex = new Map(highlightImages.map((image) => [image.dataset.index, image]));

  const getActiveHighlightIndex = () => {
    return highlightListItems.find((item) => item.classList.contains("active"))?.dataset.index ?? highlightIndexes[0];
  };

  const getDirectionFromIndexes = (currentIndex, nextIndex) => {
    return highlightIndexes.indexOf(nextIndex) > highlightIndexes.indexOf(currentIndex) ? 1 : -1;
  };

  const setActiveListItem = (activeIndex) => {
    highlightListItems.forEach((item) => {
      item.classList.toggle("active", item.dataset.index === activeIndex);
    });
  };

  const animateHighlightItem = (item, direction, isEntering) => {
    item.classList.toggle("active", isEntering);

    const childElements = [...item.children];

    if (childElements.length === 0) {
      return;
    }

    const offset = direction > 0 ? 30 : -30;

    if (isEntering) {
      animate(item, { opacity: [0, 1], y: [-offset, 0] }, { duration: highlightItemDuration, ease: defaultEase, delay: 0.5 });
      animate(childElements, { opacity: [0, 1], y: [-offset, 0] }, { duration: highlightChildDuration, delay: stagger(0.1, { startDelay: 0.75 }), ease: defaultEase });
      return;
    }

    animate(childElements, { opacity: [1, 0], y: [0, offset] }, { duration: highlightChildDuration, delay: stagger(0.1), ease: defaultEase });
  };

  const showHighlightImage = (activeIndex, direction) => {
    const imgTarget = highlightImagesByIndex.get(activeIndex)?.querySelector("img");

    if (!imgTarget || !bgContainer) {
      return;
    }

    animate(imgTarget, { y: direction > 0 ? ["-100%", "0%"] : ["100%", "0%"], scale: [1.15, 1] }, { duration: highlightImageDuration, ease: highlightImageEase });
    animate(bgContainer, { y: `-${(Number(activeIndex) - 1) * 100}%` }, { duration: highlightImageDuration, ease: highlightImageEase });
  };

  const setActiveHighlight = (activeIndex, direction = getDirectionFromIndexes(getActiveHighlightIndex(), activeIndex)) => {
    const currentActiveIndex = getActiveHighlightIndex();

    if (currentActiveIndex === activeIndex) {
      return;
    }

    const currentHighlightItem = highlightItemsByIndex.get(currentActiveIndex);
    const nextHighlightItem = highlightItemsByIndex.get(activeIndex);

    setActiveListItem(activeIndex);

    currentHighlightItem && animateHighlightItem(currentHighlightItem, direction, false);
    nextHighlightItem && animateHighlightItem(nextHighlightItem, direction, true);
    setTimeout(() => {
      showHighlightImage(activeIndex, direction);
    }, 300);
  };

  const stepHighlight = (direction) => {
    const currentActiveIndex = getActiveHighlightIndex();
    const currentPosition = highlightIndexes.indexOf(currentActiveIndex);
    const nextPosition = (currentPosition + direction + highlightIndexes.length) % highlightIndexes.length;

    setActiveHighlight(highlightIndexes[nextPosition], direction);
  };

  const syncInitialState = (activeIndex) => {
    highlightItems.forEach((item) => {
      const isActive = item.dataset.index === activeIndex;
      item.classList.toggle("active", isActive);
      item.style.opacity = isActive ? "1" : "0";
      item.style.transform = "translateY(0)";
    });

    setActiveListItem(activeIndex);

    if (bgContainer) {
      bgContainer.style.transform = `translateY(-${(Number(activeIndex) - 1) * 100}%)`;
    }
  };

  const initialActiveIndex = highlightListItems.find((item) => item.classList.contains("active"))?.dataset.index ?? highlightListItems[0].dataset.index;

  syncInitialState(initialActiveIndex);

  highlightListItems.forEach((item) => {
    item.addEventListener("click", () => {
      setActiveHighlight(item.dataset.index);
    });
  });

  highlightPrevButton?.addEventListener("click", () => {
    stepHighlight(-1);
  });

  highlightNextButton?.addEventListener("click", () => {
    stepHighlight(1);
  });

  animateHighlightItem(highlightItems[0], 1, true);
}
