import React from 'react'

//rrd imports
import { Link } from 'react-router-dom'

//component imports
import Separator from '../components/Separator'

const GamesPage = () => {
  return (
    <>
      <h2 className='text-xl md:text-3xl lg:text-4xl mx-auto w-2/3 p-6 text-3xl text-blue-900'>all GAMES</h2>
      <div className="w-screen min-h-[75%] flex bg-blue-100/50">
          {/* content */}
      </div>
      <div className='text-xs md:text-lg lg:text-1xl mx-auto my-4 w-screen sm:w-2/3 flex flex-row justify-around'>
        <Link to="/games/game"> megaman GAME </Link>
        <Link to="/games/createGame"> CREATE GAME </Link>
      </div>   
    </>
  )
} 

export default GamesPage