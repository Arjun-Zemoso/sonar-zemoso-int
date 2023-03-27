import React from 'react';
import Typography from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['heading', 'subtitle-1', 'body-1', 'body-2', 'caption-1', 'caption-2', 'caption-3'],
      control: { type: 'radio' }
    }
  }
} as Meta;
const Template: Story<React.ComponentProps<typeof Typography>> = (args) => (
  <Typography {...args} />
);
export const Heading = Template.bind({});
Heading.args = { variant: 'heading', children: 'Heading Text' };
export const Subtitle = Template.bind({});
Subtitle.args = { variant: 'subtitle-1', children: 'Subtitle 1 text' };
export const Body1 = Template.bind({});
Body1.args = { variant: 'body-1', children: 'Body 1 text' };
export const Body2 = Template.bind({});
Body2.args = { variant: 'body-2', children: 'Body 2 text' };
export const Caption1 = Template.bind({});
Caption1.args = { variant: 'caption-1', children: 'Caption 1 text' };
export const Caption2 = Template.bind({});
Caption2.args = { variant: 'caption-2', children: 'Caption 2 text' };
export const Caption3 = Template.bind({});
Caption3.args = { variant: 'caption-3', children: 'Caption 3 text' };