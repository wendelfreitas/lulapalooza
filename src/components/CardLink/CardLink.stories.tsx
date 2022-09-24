import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CardLinkProps, CardLink } from '.';

export default {
  title: 'CardLink',
  component: CardLink,
} as Meta;

export const Default: Story<CardLinkProps> = () => <CardLink />;
