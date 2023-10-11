class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <nav id="navbar" class="absolute top-0 z-10 flex items-center w-full h-24 text-white">
      <div class="flex items-center justify-between w-full main-container">
        <section class="flex-1 flex items-center gap-x-6">
          <button id="mobile-nav-menu-open">
            <svg id="bar-icon" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
              <path d="M5.25 31.5V28H36.75V31.5H5.25ZM5.25 22.75V19.25H36.75V22.75H5.25ZM5.25 14V10.5H36.75V14H5.25Z" fill="white"/>
            </svg>  
          </button>
          <a href="" class="border px-2.5 py-1 md:block hidden hover:bg-white hover:text-black transition-colors">
            Gastronomy Academy
          </a>
        </section>

        <a href="../index.html" >
          <img src="./images/logo.webp" alt="" width="55" height="55" />
        </a>

        <section class="flex-1 flex justify-end items-center gap-x-6">
          <div class="space-x-4 md:block hidden">
            <a href="" className="px-2">TH</a>
            <a href="" class="px-2 border-b">EN</a>
          </div>
          <button >
            <svg id="user-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5 20.5V19.5C5 17.6435 5.7375 15.863 7.05025 14.5503C8.36301 13.2375 10.1435 12.5 12 12.5M12 12.5C13.8565 12.5 15.637 13.2375 16.9497 14.5503C18.2625 15.863 19 17.6435 19 19.5V20.5M12 12.5C13.0609 12.5 14.0783 12.0786 14.8284 11.3284C15.5786 10.5783 16 9.56087 16 8.5C16 7.43913 15.5786 6.42172 14.8284 5.67157C14.0783 4.92143 13.0609 4.5 12 4.5C10.9391 4.5 9.92172 4.92143 9.17157 5.67157C8.42143 6.42172 8 7.43913 8 8.5C8 9.56087 8.42143 10.5783 9.17157 11.3284C9.92172 12.0786 10.9391 12.5 12 12.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </section>
      </div>
    </nav>
    `;
  }
}

customElements.define("navbar-component", Navbar);
