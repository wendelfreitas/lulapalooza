import React from 'react';
import { render, screen } from '@testing-library/react';
import { Logo } from '.';

describe('<Logo />', () => {
  it('renders component successfully', () => {
    render(<Logo />);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });
});

