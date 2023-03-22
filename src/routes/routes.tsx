import { lazy } from "react";
import {
  RouteObject,
  createBrowserRouter,
  ScrollRestoration,
} from "react-router-dom";
import App from "../components/App/App";
import endpoints from "./endpoints";
import NotFoundPage from "../pages/notFoundPage/notFoundPage";
const ProtectedRoute = lazy(
  () => import("../components/ProtectedRoute/ProtectedRoute")
);
const CreateDronePage = lazy(
  () => import("../pages/createDronePage/createDronePage")
);
const DetailPage = lazy(() => import("../pages/detailPage/detailPage"));
const HomePage = lazy(() => import("../pages/homePage/homePage"));
const LoginPage = lazy(() => import("../pages/loginPage/loginPage"));
const RegisterPage = lazy(() => import("../pages/registerPage/registerPage"));
const MyProfilePage = lazy(
  () => import("../pages/myProfilePage/myProfilePage")
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <>
        <App /> <ScrollRestoration />
      </>
    ),
    children: [
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      { path: endpoints.login, element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },

      { path: "*", element: <NotFoundPage /> },
      {
        path: "/myProfile",
        element: <ProtectedRoute element={<MyProfilePage />} />,
      },
      {
        path: "/createDrone",
        element: <ProtectedRoute element={<CreateDronePage />} />,
      },
      {
        path: "/detailed-drone/:id",
        element: <ProtectedRoute element={<DetailPage />} />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
