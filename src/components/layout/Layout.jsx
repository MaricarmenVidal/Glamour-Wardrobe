import Navbar from "./navbar/Navbar"
import Footer from "./footer/footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout