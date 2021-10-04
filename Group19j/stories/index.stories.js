import { html } from 'lit';
import '../cta-btn.js';

export default {
  title: 'CtaBtn',
  component: 'cta-btn',
  argTypes: {
    title: { control: 'text' },
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
};

function Template({ title = 'Happy Halloween!', textColor, slot }) {
  return html`
    <cta-btn
      style="--cta-btn-text-color: ${textColor || 'orange'}"
      .title=${title}
    >
      ${slot}
    </cta-btn>
  `;
}

export const Big = Template.bind({});
Big.args = {
  size: 'small',
  title: 'Spooky Scary smol Button',
  backgroundColor: 'blue',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  title: 'Lets Get SPOOKKYY',
  backgroundColor: 'green',
};
