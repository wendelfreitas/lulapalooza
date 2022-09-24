import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { BoxProps, Box } from '.';

export default {
  title: 'Box',
  component: Box,
} as Meta;

export const Default: Story<BoxProps> = () => (
  <Box color='red' size='50%'>
    <p>Hello</p>
  </Box>
);
