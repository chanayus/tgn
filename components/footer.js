class Footer extends HTMLElement {
  pathname = window.location.pathname ?? "";
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <footer class="bg-black lg:px-8 px-6 py-6 relative">
      <video class="absolute top-0 left-0 w-full h-full object-cover" width="550" height="620" playsinline autoplay loop muted>
        <source src="../videos/footer.mp4" type="video/mp4" />
      </video>

      <section class="flex py-36 z-1 relative justify-center items-center text-center">
        <div class="space-y-10">
          <h3 class="lg:text-5xl text-3xl text-white leading-relaxed font-bold">Start Your Gastronomy <br /> Journey with Us</h3>
          <a href="" class="btn-white w-fit mx-auto text-lg font-bold">Join Us</a>
        </div>
      </section>
      <section style="background-color: #F4F2EE;" class="z-1 relative lg:px-10 lg:pt-10 p-6 pb-6 text-brown rounded-lg">
        <div class="flex max-lg:flex-col gap-16 pb-10">
          <section class="space-y-5 flex-1">
            <h4 class="text-3xl font-bold">Thailand Gastronomy Network</h4>
            <address class="not-italic space-y-3">
              <p class="leading-loose">Perfect Link Consulting Group Co., Ltd. 129/171 Perfect Place,</p>
              <p class="leading-loose">Rattanathibet RoadBangraknoi, Muang, Nonthaburi 11000 Thailand</p>
              <a href="" class="flex items-center gap-x-2">
                <div class="svg-icon size-4 bg-brown" data-src="../icons/mail.svg"></div>Thailandgastronomynetwork@gmail.com
              </a>
              <a  href="" class="flex items-center gap-x-2">
                <div class="svg-icon size-4 bg-brown" data-src="../icons/phone.svg"></div>+66 818070637
              </a>
            </address>
            <div class="flex gap-x-2">
                <a href="" class="btn-rounded-brown w-10 h-10">
                  <div class="svg-icon" data-src="../icons/facebook-gold.svg"></div>
                </a>
                <a href="" class="btn-rounded-brown w-10 h-10">
                  <div class="svg-icon" data-src="../icons/instagram-gold.svg"></div>
                </a>
                <a href="" class="btn-rounded-brown w-10 h-10">
                  <div class="svg-icon" data-src="../icons/vimeo-gold.svg"></div>
                </a>
                <a href="" class="btn-rounded-brown w-10 h-10">
                  <div class="svg-icon" data-src="../icons/youtube-gold.svg"></div>
                </a>
            </div>
          </section>
          <div class="flex lg:gap-x-48 gap-x-8">
            <section class="flex flex-col gap-y-2 max-lg:flex-1">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Gastronomy Cities</a>
              <a href="">Gastronomy Journeys</a>
            </section>
            <section class="flex flex-col gap-y-2 max-lg:flex-1">
              <a href="">Creative Campaigns</a>
              <a href="">Learning & Academy</a>
              <a href="">Journal</a>
              <a href="">Join Network</a>
            </section>
          </div>
        </div>
        <div class="flex gap-y-5 max-lg:flex-col-reverse lg:items-center justify-between border-gold-light pt-5 lg:border-t">
          <p class="max-lg:text-center max-lg:border-t border-gold-light max-lg:pt-5">©2023 Thailand Gastronomy Network</p>
          <div class="lg:flex gap-x-5 gap-y-2.5 grid grid-cols-2">
            <a href="">Company Info</a>
            <a href="">Terms and Conditions</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
          </div>
        </div>
      </section>

     
    </footer>`;
  }
}

customElements.define("footer-component", Footer);
