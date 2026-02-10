class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <nav id="navbar" class="fixed border-b border-[#EBE5DA] bg-cream text-brown top-0 z-30 lg:px-8 px-4 flex justify-between items-center w-full lg:h-24 h-17 ">

      <a href="../index.html" class="flex flex-1 items-center gap-x-2">
        <img src="./images/logo.webp" class="lg:size-14 size-12" alt="" width="55" height="55" />
        <div class="crimson-font font-bold flex flex-col text-center">
          <span class="lg:text-3xl/none text-2xl/none">Thailand</span>
          <span class="lg:text-xs/none text-2xs/none">Gastronomy Network</span>
        </div>
      </a>

      <div class="desktop-links lg:flex hidden items-center gap-x-10">
        <a href="">Learn</a>
        <a href="">Taste</a>
        <a href="">Connect</a>
        <a href="">Book</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>

      <div class="flex items-center justify-end  gap-x-4 flex-1">
        <div class="flex  items-center gap-x-2">
          <a href="">EN</a>
          <div class="w-px h-4 bg-black"></div>
          <a href="" class="opacity-50">TH</a>
        </div>

          <button id="mobile-nav-menu-toggle" class="lg:hidden">
            <svg id="bar-icon" class="size-8" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
              <path d="M5.25 31.5V28H36.75V31.5H5.25ZM5.25 22.75V19.25H36.75V22.75H5.25ZM5.25 14V10.5H36.75V14H5.25Z" fill="var(--brown)"/>
            </svg>  
          </button>
      </div>
    </nav>

    <section id="mobile-nav-menu" class="fixed lg:hidden opacity-0 invisible lg:pt-24 pt-17 top-0 left-0 w-full h-full z-10 bg-[rgba(92,72,49,0.92)]">
      <div id="mobile-nav-menu-content" class="bg-cream py-5 px-8 text-brown flex flex-col gap-y-4 rounded-b-xl">
        <a href="" class="text-xl">Learn</a>
        <a href="" class="text-xl">Taste</a>
        <a href="" class="text-xl">Connect</a>
        <a href="" class="text-xl">About</a>
        <a href="" class="text-xl">Contact</a>
      </div>
    </section>
    `;
  }
}

customElements.define("navbar-component", Navbar);
