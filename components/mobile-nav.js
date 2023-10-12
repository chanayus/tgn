class MobileNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <section id="mobile-nav-menu" class="opacity-0 max-lg:overflow-y-auto invisible fixed top-0 left-0 w-full h-full z-40 bg-body-gold flex justify-between flex-col gap-y-10 py-5 text-gold">
        <div id="mobile-nav-top" class="flex items-center w-full">
          <div class="flex items-center justify-between w-full main-container">
            <section class="flex-1 flex items-center gap-x-6">
              <button id="mobile-nav-menu-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <rect x="2.3335" y="0.76709" width="32" height="2.5" transform="rotate(45 2.3335 0.76709)" fill="#AD9C6C"/>
                  <rect x="0.282227" y="23.1816" width="32" height="2.5" transform="rotate(-45 0.282227 23.1816)" fill="#AD9C6C"/>
                </svg>
              </button>
              <a href="" class="border border-gold px-2.5 py-1 md:block hidden hover:bg-[#AD9C6C] hover:text-white transition-colors">
                Gastronomy Academy
              </a>
            </section>
  
            <a href="" >
              <img src="./images/logo.webp" alt="" width="55" height="55" />
            </a>
  
            <section class="flex-1 flex justify-end items-center gap-x-6">
              <div class="space-x-4 md:block hidden">
                <a href="" className="px-2">TH</a>
                <a href="" class="px-2 border-b border-gold">EN</a>
              </div>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M5 20.5V19.5C5 17.6435 5.7375 15.863 7.05025 14.5503C8.36301 13.2375 10.1435 12.5 12 12.5M12 12.5C13.8565 12.5 15.637 13.2375 16.9497 14.5503C18.2625 15.863 19 17.6435 19 19.5V20.5M12 12.5C13.0609 12.5 14.0783 12.0786 14.8284 11.3284C15.5786 10.5783 16 9.56087 16 8.5C16 7.43913 15.5786 6.42172 14.8284 5.67157C14.0783 4.92143 13.0609 4.5 12 4.5C10.9391 4.5 9.92172 4.92143 9.17157 5.67157C8.42143 6.42172 8 7.43913 8 8.5C8 9.56087 8.42143 10.5783 9.17157 11.3284C9.92172 12.0786 10.9391 12.5 12 12.5Z" stroke="#AD9C6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </section>
          </div>
        </div>
  
        <div class="main-container flex justify-between flex-[1_1_0] gap-x-12">
          <section class="flex-1 flex flex-col">
            <div id="mobile-menu-list" class="overflow-y-auto overflow-x-hidden lg:flex-[1_1_0] lg:pr-4 pr-1 ">
              <div class="collapsible border-b border-gold">
                <button class="text-3xl flex items-center py-6 justify-between w-full ">
                  <span>About</span>
                  <div class="w-10 h-10 btn-rounded-gold button-icon">
                    <img src="./icons/arrow-down-gold.svg" alt="" width="30" height="30" />
                  </div>
                </button>
                <div class="collapsible-content-wrapper">
                  <div class="collapsible-content gap-y-6 text-xl">
                    <a href="">Thailand Gastronomy Network</a>
                    <a href="">Educational Research Initiatives</a>
                  </div>
                </div>
              </div>
  
              <a href="" class="text-3xl flex items-center py-6 justify-between w-full border-b border-gold">
                Our Brain Bank 
              </a>
  
              <div class="collapsible border-b border-gold">
                <button class="text-3xl flex items-center py-6 justify-between w-full ">
                  <span>About</span>
                  <div class="w-10 h-10 btn-rounded-gold button-icon">
                    <img src="./icons/arrow-down-gold.svg" alt="" width="30" height="30" />
                  </div>
                </button>
                <div class="collapsible-content-wrapper">
                  <div class="collapsible-content gap-y-6 text-xl">
                    <a href="">Gastronomy Academy (E-Learning Platform)</a>
                    <a href="">Sustainable Food Learning Journey and Workshop</a>
                    <a href="">Gastronomy Trail & Visit</a>
                    <a href="">Gastronomy Fair & Forum</a>
                  </div>
                </div>
              </div>
  
              <a href="" class="text-3xl flex items-center py-6 justify-between w-full border-b border-gold">
                Our Preferred Choice
              </a>
  
              <div class="collapsible border-b border-gold">
                <button class="text-3xl flex items-center py-6 justify-between w-full ">
                  <span>What we do?</span>
                  <div class="w-10 h-10 btn-rounded-gold button-icon">
                    <img src="./icons/arrow-down-gold.svg" alt="" width="30" height="30" />
                  </div>
                </button>
                <div class="collapsible-content-wrapper">
                  <div class="collapsible-content gap-y-6 text-xl">
                    <a href="">Gastronomy Academy (E-Learning Platform)</a>
                    <a href="">Sustainable Food Learning Journey and Workshop</a>
                    <a href="">Gastronomy Trail & Visit</a>
                    <a href="">Gastronomy Fair & Forum</a>
                  </div>
                </div>
              </div>
  
              <div class="collapsible border-b border-gold">
                <button class="text-3xl flex items-center py-6 justify-between w-full ">
                  <span>Food for Thoughts</span>
                  <div class="w-10 h-10 btn-rounded-gold button-icon">
                    <img src="./icons/arrow-down-gold.svg" alt="" width="30" height="30" />
                  </div>
                </button>
                <div class="collapsible-content-wrapper">
                  <div class="collapsible-content gap-y-6 text-xl">
                    <a href="">Chat with foodies & Experts</a>
                    <a href="">WOW Factors</a>
                    <a href="">Public webinars</a>
                    <a href="">Download Publications</a>
                  </div>
                </div>
              </div>
  
              <div class="collapsible">
                <button class="text-3xl flex items-center py-6 justify-between w-full ">
                  <span>Become members & partners</span>
                  <div class="w-10 h-10 btn-rounded-gold button-icon">
                    <img src="./icons/arrow-down-gold.svg" alt="" width="30" height="30" />
                  </div>
                </button>
                <div class="collapsible-content-wrapper">
                  <div class="collapsible-content gap-y-6 text-xl">
                    <a href="">Members</a>
                    <a href="">Partners</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <figure class="flex-1 w-full overflow-hidden lg:block hidden">
            <img src="../images/pages/menu-bg.webp" alt=""
            class="w-full aspect-square object-cover"
            id="mobile-nav-img"
            />
          </figure>
        </div>
  
        <div class="flex flex-col main-container items-center flex-[0.2] gap-y-8">
          <div class="space-x-4 md:hidden block">
            <a href="" className="px-2">TH</a>
            <a href="" class="px-2 border-b border-gold">EN</a>
          </div>
          <a href="" class="border border-gold px-2.5 py-1 md:hidden block ">
            Gastronomy Academy
          </a>
          <div class="flex gap-x-2 lg:justify-end justify-center w-full">
            <a href="" class="btn-rounded-gold w-10 h-10">
              <img src="./icons/facebook-gold.svg" alt="" />
            </a>
            <a href="" class="btn-rounded-gold w-10 h-10">
              <img src="./icons/instagram-gold.svg" alt="" />
            </a>
            <a href="" class="btn-rounded-gold w-10 h-10">
              <img src="./icons/vimeo-gold.svg" alt="" />
            </a>
            <a href="" class="btn-rounded-gold w-10 h-10">
              <img src="./icons/youtube-gold.svg" alt="" />
            </a>
          </div>
        </div>
    </section>
    `;
  }
}

customElements.define("mobile-nav-component", MobileNav);
