class ScrollTop extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
      this.handleScroll = this.handleScroll.bind(this);
    }
  
    connectedCallback() {
      this.render();
      window.addEventListener('scroll', this.handleScroll);
    }
  
    disconnectedCallback() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
      const button = this.shadowDOM.querySelector('#scrollTopButton');
      const scrollPosition = window.scrollY;

      const display = scrollPosition > 400 ? 'flex' : 'none';

      button.style.display = display;
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
            button {
                display: none;
                position: fixed;
                bottom: 20px;
                right: 20px;
                padding: 16px;
                background-color: rgba(51, 51, 51, 0.8);
                color: #fff;
                width: 55px;
                height: 55px;
                border: none;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                animation: fadeIn .3s ease-in-out;
                box-shadow: 0px 0px 10px rgba(196, 137, 255, 0.459);
                cursor: pointer;
            }
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
        </style>
  
  
        <button id="scrollTopButton">Scroll Top</button>
      `;
  
      this.shadowDOM.querySelector('#scrollTopButton').addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
        });
    }
  }
  
  customElements.define('scroll-top', ScrollTop);