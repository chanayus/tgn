const links = document.querySelectorAll("a");
const main = document.querySelector("main#main-content");

if (links && main) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const currentPath = window.location.href.split("#");
      const nextPath = (e.target.parentElement.href ?? e.target.href).split("#");

      if (currentPath[0] === nextPath[0] && nextPath[1]) {
        window.location = e.target.parentElement.href ?? e.target.href;
      } else {
        setTimeout(() => {
          if (main.classList.contains("fade-out")) {
            window.location = e.target.parentElement.href ?? e.target.href;
          }
        }, 350);
        main.classList.add("fade-out");
      }
    });
  });
}
