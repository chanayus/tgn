import "./modules/collapsibleMenu.js";
import "./modules/mobileNavMenu.js";

const navbar = document.querySelector("#navbar");

const pathsGoldTheme = ["educational-research-initiatives", "gastronomy-academy", "gastronomy-fair-and-forum", "media-library"];

if (pathsGoldTheme.indexOf("educational-research-initiatives") !== -1) {
  navbar?.classList.add("gold-theme");
}

window.addEventListener("beforeunload", () => window.scrollTo(0, 0));
