import { rest } from "msw";
import { mockedDrone, mockedDrones } from "./dronesArray";

const routes = {
  user: "/user",
  login: "/login",
  drones: "/drones",
  userDrones: "/user-drones",
};

const apiUrl = process.env.REACT_APP_API_URL!;

export const getUserDronesEmpty = [
  rest.get(
    `${apiUrl}${routes.drones}${routes.userDrones}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          userDrones: [],
        })
      );
    }
  ),
];

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
    `${apiUrl}${routes.drones}/delete/640f22ef6dc189aa4e9462f4`,
    async (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
  rest.get(
    `${apiUrl}${routes.drones}/detailDrone/640f22ef6dc189aa4e9462f4`,
    (req, res, ctx) => res(ctx.status(200), ctx.json({ drone: mockedDrone }))
  ),
  rest.get(`${apiUrl}${routes.drones}${routes.userDrones}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ drone: mockedDrone }))
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
    `${apiUrl}${routes.drones}/delete/640f22ef6dc189aa4e9462f4`,
    async (req, res, ctx) => {
      return res(ctx.status(500));
    }
  ),
  rest.get(
    `${apiUrl}${routes.drones}/detailDrone/640f22ef6dc189aa4e9462f4`,
    (req, res, ctx) => res(ctx.status(400))
  ),
];
