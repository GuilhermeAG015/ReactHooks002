import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

const mockComponent = () => render(<App />);

test('renders learn react link', () => {
  const APP = mockComponent();

  expect(APP.baseElement).toBeInTheDocument();
});
