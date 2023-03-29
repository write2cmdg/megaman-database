// rrd imports
import { Outlet } from "react-router-dom";


// components
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Separator from "../components/Separator";
import StarsBg from "../components/StarsBG";


const Main = () => {

  return (
    <div className="text-white uppercase w-screen h-screen flex flex-col justify-between font-press-start">
      <NavBar />
      <StarsBg />
      <main className="relative -top-10 text-center w-screen h-2/3">
      <Separator />
        <div className="h-3/4 bg-blue-200/50">
          <Outlet />
        </div>
      <Separator />
      </main>
      <Footer />
    </div>
  )
}
export default Main