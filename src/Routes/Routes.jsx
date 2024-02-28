import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import UserPanelLayout from "../Layouts/UserPanelLayout";

import UserHome from "../components/UserPanel/Home/UserHome";
import Home from "../pages/Website/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/user",
    element: <UserPanelLayout />,
    children: [
      {
        path: "/user",
        element: <UserHome />,
      },
      {
        path: "/user/all-videos",
        element: <div>all-videos</div>,
      },
      {
        path: "/user/media-storage",
        element: <div>media-storage</div>,
      },
      {
        path: "/user/brand-kit",
        element: <div>brand-kit</div>,
      },
    ],
  },
]);
