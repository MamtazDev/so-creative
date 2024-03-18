import { createBrowserRouter } from "react-router-dom";
import EditorAllClients from "../pages/EditorPanel/EditorAllClients";
import EditorAllProjects from "../pages/EditorPanel/EditorAllProjects";
import EditorDashboard from "../pages/EditorPanel/EditorDashboard";
import AllVideos from "../pages/UserPanel/AllVideos";
import BrandKit from "../pages/UserPanel/BrandKit";
import MediaStorage from "../pages/UserPanel/MediaStorage";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Folder from "../pages/UserPanel/Folder";
import UserHome from "../pages/UserPanel/UserHome";
import VideoDetails from "../pages/UserPanel/VideoDetails";
import InternalUsers from "../pages/AdminPanel/InternalUsers";
import Companies from "../pages/AdminPanel/Companies";
import PublicRoute from "../components/Route/PublicRoute";
import UserRoute from "../components/Route/UserRoute";
import EditorRoute from "../components/Route/EditorRoute";
import AdminRoute from "../components/Route/AdminRoute";
import MainLayout from "../Layouts/MainLayout";
import BrandGuidelines from "../components/UserPanel/BrandKit/BrandGuidelines";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },

  {
    path: "/user",
    element: (
      <UserRoute>
        <MainLayout />
      </UserRoute>
    ),
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
        path: "/user/video-details",
        element: <VideoDetails />,
      },
      {
        path: "/user/media-storage",
        element: <MediaStorage />,
      },
      {
        path: "/user/media-storage/folder/:id",
        element: <Folder />,
      },
      {
        path: "/user/brand-kit",
        element: <BrandKit />,
      },
      {
        path: "/user/brand-kit/create",
        element: <BrandGuidelines />,
      },
    ],
  },

  {
    path: "/editor",
    element: (
      <EditorRoute>
        <MainLayout />
      </EditorRoute>
    ),
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

  {
    path: "/admin",
    element: (
      <AdminRoute>
        <MainLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin/internal-users",
        element: <InternalUsers />,
      },
      {
        path: "/admin/companies",
        element: <Companies />,
      },
    ],
  },
]);
