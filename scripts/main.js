import "./modules/collapsibleMenu.js";
import "./modules/mobileNavMenu.js";

const navbar = document.querySelector("#navbar");

const pathsGoldTheme = ["/educational-research-initiatives.html", "/gastronomy-academy.html"];

if (pathsGoldTheme.includes(window.location.pathname)) {
  navbar?.classList.add("gold-theme");
}

window.addEventListener("beforeunload", () => window.scrollTo(0, 0));
