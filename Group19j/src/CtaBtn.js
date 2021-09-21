import { html, css, LitElement } from 'lit';

export class CtaBtn extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 20px;
        color: var(--cta-btn-text-color, #000);
      }
      a {
        border-radius: 10px;
        border-width: 1px;
        text-decoration: none;
        background-color: lightgray;
        padding: 10px 12px 10px 12px;
        font-size: 15px;
        color: black;
        transition: 0.2s;
      }
      a:hover,
      a:focus {
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
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  /* TODO
    Styling
    Accessibility tabbing
    href link
    update @click functionality
  */
  render() {
    return html`
      <h2>${this.title} Counter: ${this.counter}!</h2>
      <a role="button" href="${this.link}" @click=${this.__increment}>increment</button>
    `;
  }
}
