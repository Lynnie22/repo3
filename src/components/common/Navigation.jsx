import Logo from "./Logo"
import Navlinks from "./Navlinks"

const Navigation = () => {
  return (
    <div className="flex justify-between items-center">
        <Logo/>
        <Navlinks/>
    </div>
  )
}

export default Navigation
