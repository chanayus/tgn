const collapsibleButton = document.querySelectorAll(".collapsible > button");

const toggleCollapsibleMenu = (e) => {
  e.target.parentElement.classList.toggle("active");
};

[...collapsibleButton]?.map((item) => item.addEventListener("click", toggleCollapsibleMenu));
