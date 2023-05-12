// rrd imports
import { NavLink } from "react-router-dom"
import useLogout from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import Login from "../pages/Login"


const NavBar = () => {

  const {logout} = useLogout()

  const { user } = useAuthContext()
  
  const handleClick = () => {
    logout()
  }


  return (

    

    <div className="
    w-full flex flex-col items-center justify-evenly
    font-press-start uppercase
    text-blue-100 mb-8
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


        { !user && (
        <NavLink className="mx-auto py-2 min-w-fit px-4 md:mb-2 text-center w-full text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300" 
        to="/register">Register</NavLink>
        )}
        { !user && (
        <NavLink className="mx-auto py-2 min-w-fit px-4 md:mb-2 text-center w-full text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300" 
        to="/login">Login</NavLink>
        )}
        { user && (
        <NavLink className="mx-auto py-2 min-w-fit px-4 md:mb-2 text-center w-full text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300" 
        to="/allGames">ALL GAMES</NavLink>
        )}

        { user && (
        <NavLink className="mx-auto py-2 min-w-fit px-4 md:mb-2 text-center w-full text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300" 
        to="/allBosses">ALL BOSSES</NavLink>
        )}

        { user && (
          <NavLink className="mx-auto py-2 min-w-fit px-4 md:mb-2 text-center w-full text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300" 
          to="/login" onClick={handleClick}>logout</NavLink>
          
          )}

      </div>
          { user && (
                      
          <h3 className="ml-auto">Welcome, {user.email}</h3>

            )}
    
    </div>

 
  )
}

export default NavBar