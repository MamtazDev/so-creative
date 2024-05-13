import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";
import useAuthCheck from "./hooks/useAuthCheck";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const authChecked = useAuthCheck();
  return authChecked ? <RouterProvider router={router} /> : <div></div>;
}

export default App;
