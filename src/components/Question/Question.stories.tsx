import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { QuestionProps, Question } from '.';

export default {
  title: 'Question',
  component: Question,
} as Meta;

export const Default: Story<QuestionProps> = () => <Question />;
