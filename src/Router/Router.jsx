import { createBrowserRouter } from "react-router-dom";
import AddTask from "../Page/Dashboard/AddTask";
import Dashboard from "../Page/Dashboard/Dashboard";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Registration from "../Page/Registration";
import Layout from "../layout/layout";

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
    element: <Dashboard/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "addtask",
        element: <AddTask />,
      },
    ],
  },
]);

export default Router;
