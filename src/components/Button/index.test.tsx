import React from 'react';

import { render, screen } from '@testing-library/react';
import Button from '.';

test('renders learn react link', () => {
  render(<Button />);
  const linkElement = screen.getByTitle("submit-button");
  expect(linkElement).toBeInTheDocument();
});
