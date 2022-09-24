import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardLink } from '.';

describe('<CardLink />', () => {
  it('renders component successfully', () => {
    render(<CardLink />);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });
});

