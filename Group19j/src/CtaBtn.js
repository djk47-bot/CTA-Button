import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class CtaBtn extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 10px;
        color: var(--cta-btn-text-color, orange);
        font-family: Butcherman, fantasy;
        font-size: 30px;
      }
      a {
        text-decoration: none;
        font-size: 25px;
        color: black;
      }
      a:hover,
      a:focus {
        color: white;
        background-color: darkgray;
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
        color: white;
        background-color: darkgray;
        transition: 0.2s;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      link: { type: String },
      icon: { type: String },
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.title = 'GitHub CTA Button'; // overwritten by index.html
    this.text = 'Click if you dare';
    this.link = 'https://www.youtube.com/watch?v=Hq_C-s3JzS4';
    this.icon = 'report-problem';
    this.disabled = false;
  }

  /* TODO
    Styling
    update @click functionality
  */
  render() {
    return html`
      <h2>${this.title}</h2>
      <a
        @click="${this.__click}"
        href="${this.link}"
        tabindex="-1"
        role="button"
        rel="noopener"
        target="_blank"
      >
        <button ?disabled="${this.disabled}">
          <simple-icon-lite icon=${this.icon}></simple-icon-lite>
          ${this.text}
          <slot></slot>
        </button>
      </a>
    `;
  }
}
