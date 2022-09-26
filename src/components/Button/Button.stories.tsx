import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonProps, Button } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Default: Story<ButtonProps> = () => <Button />;
