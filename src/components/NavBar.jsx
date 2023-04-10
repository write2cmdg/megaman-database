// rrd imports
import { Form, NavLink } from "react-router-dom"
import Separator from "./Separator"


const NavBar = () => {
  return (

    

    <div className="
    w-full flex flex-col items-center justify-evenly
    font-press-start uppercase
    text-blue-100 
    ">

      <div className="
      flex flex-row justify-center items-center
      ">
        <img className="m-8 mx-auto" src="../images/megamanTitle.png" />
      </div>

      <div className="
      w-full
      md:text-xl text-md
      flex flex-col md:flex-row md:gap-2 justify-evenly mb-6 md:mx-0 mx-8 content-around
      ">

        <NavLink className="mx-auto py-2 min-w-fit px-4 md:mb-2 text-center w-full text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300" 
        to="/games">ALL GAMES</NavLink>

        <NavLink className="mx-auto py-2 min-w-fit px-4 md:mb-2 text-center w-full text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300" 
        to="/bosses">ALL BOSSES</NavLink>

        <NavLink className="mx-auto py-2 min-w-fit px-4 md:mb-2 text-center w-full text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300" 
        to="/">logout</NavLink>

      </div>
    
    </div>

 
  )
}

export default NavBar