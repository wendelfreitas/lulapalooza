import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '.';

describe('<Footer />', () => {
  it('renders component successfully', () => {
    render(<Footer />);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });
});

