import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";

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
]);

export default Router;
