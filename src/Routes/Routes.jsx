import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-videos",
        element: <div>all-videos</div>,
      },
      {
        path: "/media-storage",
        element: <div>media-storage</div>,
      },
      {
        path: "/brand-kit",
        element: <div>brand-kit</div>,
      },
    ],
  },
]);
