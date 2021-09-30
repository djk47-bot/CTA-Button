import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class JBtn extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--j-btn-text-color, darkorange);
      }
      :host([disabled]) h2 {
        background-color: blue;
      }
      a {
        display: inline-block;
        color: #333333;
      }
      .j-btn {
        box-shadow: 0px 1px 0px 0px #fff6af;
        background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
        background-color: #ffec64;
        border-radius: 9px;
        border: 2px solid #ffaa22;
        display: inline-block;
        cursor: pointer;
        color: #333333;
        font-family: Arial;
        font-size: 15px;
        font-weight: bold;
        padding: 6px 24px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #ffee66;
      }
      .j-btn:hover,
      .j-btn:focus {
        background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
        background-color: #ffab23;
      }

      .j-btn:active {
        position: relative;
        top: 1px;
      }

      h2 {
        font-color: white;
      }
      simple-icon-lite {
        color: orange;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      disabled: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.disabled = false;
    this.link =
      'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjj3qaDoqXzAhWwTt8KHbT5DMgQyCl6BAgFEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Druwu3RKnugk&usg=AOvVaw2QR_vGXqHsGSCTk_zt1zk_';
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <a tabindex="-1" rel="noopener" target="_blank" href="${this.link}">
        <button class="j-btn" ?disabled="${this.disabled}">
          Click if you dare
          <simple-icon-lite icon="block"></simple-icon-lite>
        </button>
      </a>
    `;
  }
}
