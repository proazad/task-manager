import { createBrowserRouter } from "react-router-dom";
import AddTask from "../Page/Dashboard/AddTask";
import Dashboard from "../Page/Dashboard/Dashboard";
import UpdateTask from "../Page/Dashboard/UpdateTask";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Registration from "../Page/Registration";
import Layout from "../layout/layout";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <AddTask />,
      },
      {
        path: "/dashboard/task/:id",
        element: <UpdateTask />,
      },
    ],
  },
]);

export default Router;
