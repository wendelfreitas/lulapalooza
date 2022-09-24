import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FooterProps, Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

export const Default: Story<FooterProps> = () => <Footer />;
