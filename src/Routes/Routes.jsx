import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div>jhjg</div>,
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
