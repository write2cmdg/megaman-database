// rrd imports
import { Form, NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="">
      <div className="w-screen flex flex-col items-center justify-evenly w-screen">
        <img src="../images/megamanTitle.png" />
        <div className="sm:w-screen lg:text-3xl sm:text-xl flex flex-col sm:flex-row justify-around content-around mx-8">
          <NavLink to="/games" className="md:my-10 my-2">ALL GAMES</NavLink>
          <NavLink to="/bosses" className="md:my-10 my-2">ALL BOSSES</NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar