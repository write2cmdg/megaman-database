import React from 'react'
import { Link } from 'react-router-dom'
import Separator from '../components/Separator'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import StarsBg from '../components/StarsBg'

const NotFound = () => {
  return (
    <div className="p-2 sm:p-4 md:p-8 mx-auto flex flex-col justify-between w-screen h-full overflow-hidden lg:w-3/4 xl:w-2/3 2xl:w-1/2 ">
    <NavBar />
    <main className="border-x-8 border-blue-200/30 rounded-lg">
      
          <div className="bg-slate-800/90 flex flex-col justify-evenly">

          <h2 className='
        p-4 justify-center mx-auto
        text-blue-200 text-xl w-screen md:text-3xl text-center font-press-start uppercase
        '>Page not found</h2>
       
          <Link to={`/`}  className="mx-auto py-2 min-w-fit px-4 md:mb-2 text-center w-fit text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300" > Go Back Home</Link>


          </div>
    </main>
    <Footer />
    <StarsBg /> 
  </div>
  )
}

export default NotFound