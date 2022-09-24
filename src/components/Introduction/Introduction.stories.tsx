import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Introduction } from '.';

export default {
  title: 'Introduction',
  component: Introduction,
} as Meta;

export const Default: Story = () => <Introduction />;
