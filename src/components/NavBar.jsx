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
      flex flex-col md:flex-row justify-evenly mb-6 md:ml-0 ml-8 content-around
      ">

        <NavLink className="
        mb-3 underline hover:text-yellow-300" 
        to="/games">ALL GAMES</NavLink>

        <NavLink className="mb-3 underline hover:text-yellow-300" 
        to="/bosses">ALL BOSSES</NavLink>

        <NavLink className="mb-3 underline hover:text-yellow-300" 
        to="/">logout</NavLink>

      </div>
    
    </div>

 
  )
}

export default NavBar