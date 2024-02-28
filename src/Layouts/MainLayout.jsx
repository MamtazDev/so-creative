import { Outlet } from "react-router-dom"

import Footer from "../Shared/Website/Footer/Footer"
import Header from "../Shared/Website/Header/Header"


const MainLayout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default MainLayout