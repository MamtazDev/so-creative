import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AdminRoute from "../components/Route/AdminRoute";
import EditorRoute from "../components/Route/EditorRoute";
import PublicRoute from "../components/Route/PublicRoute";
import UserRoute from "../components/Route/UserRoute";
import BrandGuidelineEdit from "../components/UserPanel/BrandKit/BrandGuidelineEdit";
import BrandGuidelines from "../components/UserPanel/BrandKit/BrandGuidelines";
import Companies from "../pages/AdminPanel/Companies";
import InternalUsers from "../pages/AdminPanel/InternalUsers";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import EditorAllClients from "../pages/EditorPanel/EditorAllClients";
import EditorAllProjects from "../pages/EditorPanel/EditorAllProjects";
import EditorDashboard from "../pages/EditorPanel/EditorDashboard";
import EditorProjects from "../pages/EditorPanel/EditorProjects";
import AllVideos from "../pages/UserPanel/AllVideos";
import BrandKit from "../pages/UserPanel/BrandKit";
import Download from "../pages/UserPanel/Download";
import Folder from "../pages/UserPanel/Folder";
import MediaStorage from "../pages/UserPanel/MediaStorage";
import Projects from "../pages/UserPanel/Projects";
import PurchaseCredit from "../pages/UserPanel/PurchaseCredit";
import PurchaseSubscription from "../pages/UserPanel/PurchaseSubscription";
import Subscription from "../pages/UserPanel/Subscription";
import UserHome from "../pages/UserPanel/UserHome";
import VideoDetails from "../pages/UserPanel/VideoDetails";

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
    path: "/register/invite/:token",
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
        path: "/user/projects",
        element: <Projects />,
      },
      {
        path: "/user/all-videos",
        element: <AllVideos />,
      },

      {
        path: "/user/project-details/:id",
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
      {
        path: "/user/brand-kit/:id",
        element: <BrandGuidelineEdit />,
      },
      {
        path: "/user/purchase-credit/:credit",
        element: <PurchaseCredit />,
      },
      {
        path: "/user/subscribe/:plan",
        element: <PurchaseSubscription />,
      },
      {
        path: "/user/subscription/weakly",
        element: <Subscription />,
      },
      {
        path: "/user/subscription/monthly",
        element: <Subscription />,
      },
      {
        path: "/user/download",
        element: <Download />,
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
        path: "/editor/my-projects",
        element: <EditorProjects />,
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
