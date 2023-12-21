import "./modules/collapsibleMenu.js";
import "./modules/mobileNavMenu.js";

const navbar = document.querySelector("#navbar");

const pathsGoldTheme = ["educational-research-initiatives", "gastronomy-academy", "gastronomy-fair-and-forum", "media-library"];

const pathname = window.location.pathname.substring(1).replace(".html", "");

if (pathsGoldTheme.indexOf(pathname) !== -1) {
  navbar?.classList.add("gold-theme");
}

window.addEventListener("beforeunload", () => window.scrollTo(0, 0));
