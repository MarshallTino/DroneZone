import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import LoginPage from "../pages/loginPage/loginPage";
import endpoints from "./endpoints";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: endpoints.login,
        element: <ProtectedRoute element={<LoginPage />} />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
