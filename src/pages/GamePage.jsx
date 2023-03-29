import React from 'react'
import { Link } from 'react-router-dom'

const GamePage = () => {
  return (
    <>
      <h2 className='text-xl md:text-3xl lg:text-4xl mx-auto w-2/3 p-6 text-3xl text-blue-900'>Megaman Game</h2>
        <div className="w-screen min-h-[75%] flex bg-blue-100/50">
            {/* content */}
        </div>
        <div className='text-xs md:text-lg lg:text-1xl mx-auto my-4 w-screen sm:w-2/3 flex flex-row justify-around'>
          <Link to="updateGame"> UPDATE Game </Link>
        </div> 
        
    </>
  )
}

export default GamePage