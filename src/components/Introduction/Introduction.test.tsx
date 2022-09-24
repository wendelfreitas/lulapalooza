import React from 'react';
import { render, screen } from '@testing-library/react';
import { Introduction } from '.';

describe('<Introduction />', () => {
  it('renders component successfully', () => {
    render(<Introduction />);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });
});

