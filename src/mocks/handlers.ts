import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:3000/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticcated', 'true');
    return res(ctx.status(200), ctx.json({ data: 'que onda dude' }));
  }),
  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),
];
