import { createBrowserRouter } from "react-router-dom";
import Home from "../components/UserPanel/Home/Home";
import UserPanelLayout from "../Layouts/UserPanelLayout";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
  {
    path: "/user",
    element: <UserPanelLayout />,
    children: [
      {
        path: "/user",
        element: <Home />,
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
