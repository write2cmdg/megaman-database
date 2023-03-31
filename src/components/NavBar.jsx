// rrd imports
import { Form, NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <div>
      <div className="w-screen flex flex-col items-center justify-evenly">
        <img className="mt-4" src="../images/megamanTitle.png" />

        <div className="w-screen lg:w-3/4 sm:text-2xl text-xl flex flex-col sm:flex-row justify-evenly content-around mx-8">

          <NavLink to="/games" className="mx-4 text-center md:my-10 border-4 border-sky-200/50 my-2 bg-sky-100/25 hover:bg-sky-100/50 hover:text-blue-900 hover:border-blue-900 pt-1 px-10 rounded-2xl ">ALL GAMES</NavLink>

          <NavLink to="/bosses" className="mx-4 text-center md:my-10 my-2 border-4 border-sky-200/50 bg-sky-100/25 hover:bg-sky-100/50 hover:text-blue-900 hover:border-blue-900 pt-1 px-10 rounded-2xl">ALL BOSSES</NavLink>

        </div>
      </div>
    </div>
  )
}

export default NavBar