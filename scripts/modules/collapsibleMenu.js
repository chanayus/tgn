const collapsibleButtons = [...document.querySelectorAll(".collapsible > button")];

let closeAllBeforeToggle = false;

export const setCloseAllBeforeToggle = (value) => {
  closeAllBeforeToggle = value;
};

const closeAllCollapsibleMenu = (toggleIndex) => {
  collapsibleButtons?.forEach((item, index) => toggleIndex !== index && item.parentElement.classList.remove("active"));
};

const toggleCollapsibleMenu = (e, index) => {
  closeAllBeforeToggle && closeAllCollapsibleMenu(index);
  e.target.parentElement.classList.toggle("active");
};

collapsibleButtons?.forEach((item, index) => item.addEventListener("click", (e) => toggleCollapsibleMenu(e, index)));
