import React from 'react'
import { Link } from 'react-router-dom'
import Separator from '../components/Separator'

const NotFound = () => {
  return (
    <div className='bg-blue-900'>

      <div className="flex flex-col justify-center">
          <Separator />

          <div className="bg-slate-800/90 flex flex-col justify-evenly">

          <h2 className='
        p-4 justify-center mx-auto
        text-blue-200 text-xl w-screen md:text-3xl text-center font-press-start uppercase
        '>Page not found</h2>
       
          <Link to={`/`}  className="mx-auto py-2 min-w-fit px-4 md:mb-2 text-center w-fit text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300" > Go Bach Home</Link>


          </div>




          <Separator />

      </div>

    </div>
  )
}

export default NotFound