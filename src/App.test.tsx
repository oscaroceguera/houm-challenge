import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { server } from './mocks/server';
import { rest } from 'msw';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Other', () => {
  server.resetHandlers(
    rest.post('http://localhost:3000/login', (req, res, ctx) =>
      res(ctx.status(200)),
    ),
  );
});
