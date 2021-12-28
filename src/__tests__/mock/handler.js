import { rest } from 'msw'
import base64 from 'base-64';

export const handlers = [
  rest.post('https://code-break-server.herokuapp.com/signup', (req, res, ctx) => {
    let basic = req.headers._headers.authorization.split(' ').pop();
    let [user, pass] = base64.decode(basic).split(':');

    const response = {
      user: { username: user, password: pass },
      token: 'tokengoeshere'
    };
    return res(
      ctx.status(200),
      ctx.json(response)
    );
  }),

  rest.get('https://code-break-server.herokuapp.com/signin', (req, res, ctx) => {
    const user = {
      user: { username: req.user, password: req.pass},
      token: 'mytokenhere',
    };
  
    return res(
      ctx.status(201),
      ctx.json([{user}])
    );
  }),
]