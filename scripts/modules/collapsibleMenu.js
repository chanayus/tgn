const collapsibleButtons = [...document.querySelectorAll(".collapsible > button")];

let closeAllBeforeToggle = false;
let scrollToTarget = false;

export const setCloseAllBeforeToggle = (value) => {
  closeAllBeforeToggle = value;
};

export const setScrollToTarget = (value) => {
  scrollToTarget = value;
};

const closeAllCollapsibleMenu = (toggleIndex) => {
  collapsibleButtons?.forEach((item, index) => toggleIndex !== index && item.parentElement.classList.remove("active"));
};

const toggleCollapsibleMenu = (e, index) => {
  closeAllBeforeToggle && closeAllCollapsibleMenu(index);
  scrollToTarget && e.target.scrollIntoView();
  e.target.parentElement.classList.toggle("active");
};

collapsibleButtons?.forEach((item, index) => item.addEventListener("click", (e) => toggleCollapsibleMenu(e, index)));
