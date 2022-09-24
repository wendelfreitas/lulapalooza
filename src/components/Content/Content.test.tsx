import React from 'react';
import { render, screen } from '@testing-library/react';
import { Content } from '.';

describe('<Content />', () => {
  it('renders component successfully', () => {
    render(<Content />);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });
});

