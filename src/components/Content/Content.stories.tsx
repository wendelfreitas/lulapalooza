import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Content } from '.';

export default {
  title: 'Content',
  component: Content,
} as Meta;

export const Default: Story = () => <Content />;
