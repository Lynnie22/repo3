import { Outlet } from "react-router-dom"
import Navigation from "../common/Navigation"

const Layout = () => {
  return (
    <div className="w-full h-full p-5 ">
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default Layout
