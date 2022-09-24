import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('<Header />', () => {
  it('renders component successfully', () => {
    render(<Header />);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });
});

