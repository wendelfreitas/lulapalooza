import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('renders component successfully', () => {
    render(<Button />);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });
});

