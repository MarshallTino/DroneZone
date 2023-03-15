import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import HomePage from "../pages/homePage/homePage";
import LoginPage from "../pages/loginPage/loginPage";
import MyProfilePage from "../pages/myProfilePage/myProfilePage";
import NotFoundPage from "../pages/notFoundPage/notFoundPage";
import endpoints from "./endpoints";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      { path: endpoints.login, element: <LoginPage /> },
      { path: "*", element: <NotFoundPage /> },
      {
        path: "/myProfile",
        element: <ProtectedRoute element={<MyProfilePage />} />,
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
