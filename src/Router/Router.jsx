import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Page/Dashboard/Dashboard";
import Task from "../Page/Dashboard/Task";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Registration from "../Page/Registration";
import Layout from "../layout/layout";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../Page/Dashboard/AddTask";

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
        element: <Task />,
      },
      {
        path: "/dashboard/addtask",
        element: <AddTask />,
      },
    ],
  },
]);

export default Router;
