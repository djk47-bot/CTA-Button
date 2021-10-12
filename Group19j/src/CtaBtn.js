import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js';

export class CtaBtn extends IntersectionObserverMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 10px;
        color: var(--cta-btn-text-color, orange);
        font-family: Butcherman, fantasy;
        font-size: 30px;
      }
      :host([dark]) {
        --cta-btn-background-color: black;
        --cta-btn-text-color: white;
      }
      :host([dark]) :active {
        --cta-btn-background-color: orange;
      }
      :host([dark]) :disabled {
        --cta-btn-text-color: #ffffff;
      }
      a {
        text-decoration: none;
        font-size: 25px;
        color: black;
      }
      a:hover,
      a:focus {
        color: orange;
        background-color: #4c3457;
        transition: 0.2s;
      }
      button {
        border-radius: 15px;
        box-shadow: 0px 1px 0px 0px #8a8882;
        border-width: 1px;
        border: 2px solid #5c5b5a;
        display: inline-block;
        cursor: pointer;
        text-decoration: none;
        background-color: transparent;
        padding: 10px 10px;
        font-size: 25px;
        font-family: Butcherman, fantasy;
        font-weight: bold;
        color: #4c3457;
        transition: 0.2s;
      }
      button:hover,
      button:focus {
        color: orange;
        background-color: #4c3457;
        transition: 0.1s;
      }
      button:active {
        color: white;
        background-color: #4c3457;
        transition: 0.1s;
      }
      button:disabled {
        color: var(--cta-btn-text-color);
        background-color: darkgray;
        cursor: not-allowed;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String, reflect: true, attribute: 'title' },
      text: { type: String, reflect: true, attribute: 'label' },
      link: { type: String, reflect: true, attribute: 'href' },
      icon: { type: String, reflect: true, attribute: 'icon' },
      dark: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.title = 'GitHub CTA Button'; // overwritten by template
    this.text = 'Click if you dare';
    this.link = 'https://www.youtube.com/watch?v=GMgsFZ4rkEI';
    this.icon = 'report-problem';
    this.dark = false;
    this.disabled = false;
  }

  /*
   * click event to disable button after click and avoid spam
   */
  _click(e) {
    e.preventDefault();
    window.open(this.link, '_blank');
    const button = this.shadowRoot.querySelector('button');
    button.setAttribute('disabled', '');
    this.disabled = true;
    setTimeout(() => {
      this.disabled = false;
    }, 2000); // delay 2 seconds
    button.removeAttribute('disabled');
  }

  render() {
    return html` ${this.elementVisible
      ? html` <h2>${this.title}</h2>
          <a
            href="${this.link}"
            @click="${this._click}"
            tabindex="-1"
            role="button"
            rel="noopener"
            target="_blank"
          >
            <button ?disabled="${this.disabled}">
              <simple-icon-lite icon=${this.icon}></simple-icon-lite>
              ${this.text}
            </button>
          </a>`
      : ``}`;
  }
}
