import React from 'react';
import { render, screen } from '@testing-library/react';
import { Question } from '.';

describe('<Question />', () => {
  it('renders component successfully', () => {
    render(<Question />);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });
});

