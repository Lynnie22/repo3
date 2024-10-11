import { NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"; 
import { useState } from "react";
import './Navlinks.css';

const Navlinks = () => {
    const [isOpen, setIsOpen] = useState(false); //state for toggling sidebar

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div>
        {/* Navigation for large screens */}
      <nav  className="hidden sm:flex gap-5 items-center ">
        <NavLink to="/"
                className={({isActive}) => 
                    `transition-all duration-200 ease-in font-medium ${
                        isActive
                        ? "text-darkpink font-bold ease-in scale-110"
                        : "text-black"
                    }`
                }
        >
            Home
        </NavLink>

        <NavLink to="/logworkout"
                className={({isActive}) => 
                    `transition-all duration-200 ease-in font-medium ${
                        isActive
                        ? "text-darkpink font-bold ease-in scale-110"
                        : "text-black"
                    }`
                }
        >
            Log Workout
        </NavLink>

        <NavLink to="/history"
                className={({isActive}) => 
                    `transition-all duration-200 ease-in font-medium ${
                        isActive
                        ? "text-darkpink font-bold ease-in scale-110"
                        : "text-black"
                    }`
                }
        >
            Workout History
        </NavLink>
        
        <NavLink to="/searching"
                className={({isActive}) => 
                    `transition-all duration-200 ease-in font-medium ${
                        isActive
                        ? "text-darkpink font-bold ease-in scale-110"
                        : "text-black"
                    }`
                }
        >
            Search
        </NavLink>
      </nav>

      <div className="sm:hidden ">
        <button onClick={toggleSidebar}>
            {isOpen ? (
                <FaTimes className="text-2xl text-darkpink"/>
            ) : (
                <FaBars className="text-2xl text-darkpink"/>
            )}
        </button>
      </div>

      {/* side bar For mobile and small screens */}
      <div className={`sidebar md:hidden transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>

        {/* close side bar button */}
        <button className="self-end" onClick={toggleSidebar}>
            <FaTimes className="text-2xl" />
        </button>
        <nav className="flex flex-col gap-5">
        <NavLink
          to="/"
          onClick={toggleSidebar} // Close sidebar after clicking link
          className={({ isActive }) =>
            `transition-all duration-200 ease-in font-medium ${
              isActive
                ? "text-darkpink font-bold ease-in scale-110"
                : "text-black"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/logworkout"
          onClick={toggleSidebar} // Close sidebar after clicking link
          className={({ isActive }) =>
            `transition-all duration-200 ease-in font-medium ${
              isActive
                ? "text-darkpink font-bold ease-in scale-110"
                : "text-black"
            }`
          }
        >
          Log Workout
        </NavLink>

        <NavLink
          to="/history"
          onClick={toggleSidebar} // Close sidebar after clicking link
          className={({ isActive }) =>
            `transition-all duration-200 ease-in font-medium ${
              isActive
                ? "text-darkpink font-bold ease-in scale-110"
                : "text-black"
            }`
          }
        >
          Workout History
        </NavLink>

        <NavLink
          to="/searching"
          onClick={toggleSidebar} // Close sidebar after clicking link
          className={({ isActive }) =>
            `transition-all duration-200 ease-in font-medium ${
              isActive
                ? "text-darkpink font-bold ease-in scale-110"
                : "text-black"
            }`
          }
        >
          Searching
        </NavLink>
        </nav>

      </div>

    </div>
  )
}

export default Navlinks
