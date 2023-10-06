class Footer extends HTMLElement {
  pathname = window.location.pathname ?? "";
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <footer class="text-gold">
      <div class="py-10 flex flex-col items-center space-y-8">
        <a href="">
          <img src="./images/logo.webp" alt="" width="180" height="180" />
        </a>
        <div class="flex gap-x-2">
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
        <div class="[&>a]:px-5 lg:[&>a:not(a:last-of-type)]:border-r [&>a]:border-current flex flex-wrap justify-center gap-y-4">
            <a href="">COMPANY INFO</a>
            <a href="">TERMS AND CONDITIONS</a>
            <a href="">PRIVACY POLICY</a>
            <a href="">COOKIE POLICY</a>
        </div>
      </div>

       <div class="py-7 border-t border-gold w-full text-center">
        ©2023 Thailand Gastronomy Network
       </div>
    </footer>`;
  }
}

customElements.define("footer-component", Footer);
