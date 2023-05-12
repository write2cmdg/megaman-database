// rrd imports
import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"



// components
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import StarsBg from "../components/StarsBg";

const Main = () => {

  return (
    <div className="p-2 sm:p-4 md:p-8 mx-auto flex flex-col justify-between w-screen h-full overflow-hidden lg:w-3/4 xl:w-2/3 2xl:w-1/2 ">
      <NavBar />
      <main className="border-x-8 border-blue-200/30 rounded-lg">
        <Outlet />
      </main>
      <Footer />
      <StarsBg /> 
    </div>
  )
}
export default Main