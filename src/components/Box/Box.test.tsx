import React from 'react';
import { render, screen } from '@testing-library/react';
import { Box } from '.';

describe('<Box />', () => {
  it('renders component successfully', () => {
    render(<Box />);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });
});

