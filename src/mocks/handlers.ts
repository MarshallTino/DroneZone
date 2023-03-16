import { rest } from "msw";
import { mockedDrones } from "./dronesArray";

const routes = {
  user: "/user",
  login: "/login",
  drones: "/drones",
  userDrones: "/userDrones",
};

const apiUrl = process.env.REACT_APP_API_URL!;

export const handlers = [
  rest.post(`${apiUrl}${routes.user}${routes.login}`, async (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        token: "aj39jdjadjawdij",
      })
    );
  }),
  rest.get(`${apiUrl}${routes.drones}`, async (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        drones: mockedDrones,
      })
    );
  }),
  rest.delete(
    `${apiUrl}${routes.drones}/d4435dwadawd345`,
    async (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${routes.user}${routes.login}`, async (req, res, ctx) => {
    return res(ctx.status(401));
  }),
  rest.get(`${apiUrl}/drones`, async (req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(
    `${apiUrl}${routes.drones}/d4435dwadawd345`,
    async (req, res, ctx) => {
      return res(ctx.status(500));
    }
  ),
];
