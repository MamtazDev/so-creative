import { createBrowserRouter } from "react-router-dom";
import UserPanelLayout from "../Layouts/UserPanelLayout";
import EditorAllClients from "../pages/EditorPanel/EditorAllClients";
import EditorAllProjects from "../pages/EditorPanel/EditorAllProjects";
import EditorDashboard from "../pages/EditorPanel/EditorDashboard";
import AllVideos from "../pages/UserPanel/AllVideos";
import BrandKit from "../pages/UserPanel/BrandKit";
import MediaStorage from "../pages/UserPanel/MediaStorage";
import UserHome from "../pages/UserPanel/UserHome";
import EditorPanelLayout from "./../Layouts/EditorPanelLayout";

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <MainLayout />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //   ],
  // },

  {
    path: "/",
    element: <UserPanelLayout />,
    children: [
      {
        path: "/",
        element: <UserHome />,
      },
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
        element: <MediaStorage />,
      },
      {
        path: "/user/brand-kit",
        element: <BrandKit />,
      },
    ],
  },

  {
    path: "/editor",
    element: <EditorPanelLayout />,
    children: [
      {
        path: "/editor",
        element: <EditorDashboard />,
      },
      {
        path: "/editor/all-projects",
        element: <EditorAllProjects />,
      },
      {
        path: "/editor/clients",
        element: <EditorAllClients />,
      },
    ],
  },
]);
