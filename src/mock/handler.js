import { rest } from 'msw'
import base64 from 'base-64';

export const handlers = [
  rest.post(`${process.env.REACT_APP_URL}/signup`, (req, res, ctx) => {
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

  rest.get(`${process.env.REACT_APP_URL}/signin`, (req, res, ctx) => {
    const user = {
      user: { username: req.username, password: req.password},
      token: 'mytokenhere',
    };
  
    return res(
      ctx.status(201),
      ctx.json([user])
    );
  }),
]
