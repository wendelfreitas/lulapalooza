import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { HeaderProps, Header } from '.';

export default {
  title: 'Header',
  component: Header,
} as Meta;

export const Default: Story<HeaderProps> = () => <Header />;
