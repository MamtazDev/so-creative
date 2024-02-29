import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import UserPanelLayout from "../Layouts/UserPanelLayout";
import EditorAllProjects from "../pages/EditorPanel/EditorAllProjects";
import EditorDashboard from "../pages/EditorPanel/EditorDashboard";
import UserHome from "../pages/UserPanel/UserHome";
import AllVideos from "../pages/UserPanel/AllVideos";
import Home from "../pages/Website/Home";
import EditorPanelLayout from './../Layouts/EditorPanelLayout';


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
        element: <AllVideos />,
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

  {
    path: "/editor",
    element: <EditorPanelLayout/>,
    children: [
      {
        path: "/editor",
        element: <EditorDashboard />,
      },
      {
        path: "/editor/all-projects",
        element: <EditorAllProjects />,
      },
    ],
  },
]);
