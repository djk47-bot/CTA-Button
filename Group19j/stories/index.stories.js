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

export const Regular = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Spooky Scary Skeletons',
  component: 'cta-btn',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Lets Get Spoooooky',
};
