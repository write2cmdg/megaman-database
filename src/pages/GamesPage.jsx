import axios from 'axios'
import React, { useEffect, useState } from 'react'


//rrd Imports
import { Link } from 'react-router-dom'
import Separator from '../components/Separator'


const GamesPage = () => {
  const [ data, setData] = useState([])

  useEffect(() => {
  axios.get('http://localhost:4000/allGames')
  .then(res => setData(res.data))
  .catch(err => console.log(err));
  }, [])
  
  return (

    <div>
      <Separator />

      <div className="bg-slate-800/90 flex flex-row justify-evenly">

        <h2 className='
        p-4 justify-center mx-auto my-4
        text-blue-200 text-xl w-screen md:text-3xl text-center font-press-start uppercase
        '>All Megaman Games</h2>

      </div>

      <div className='lg:h-80 h-44  bg-slate-800/90 overflow-hidden overflow-y-auto scrollbar scrollbar-rounded-large scrollbar-thumb-blue-900 scrollbar-track-blue-900/40 hover:scrollbar-thumb-blue-200/50'>



        <div className='text-blue-200'>
          {
            data.map((d, ind) => (
          
              <div className='flex flex-col items-center justify-center h-12' key={ind}>
                <Link className="sm:text-3xl text-lg capitalize hover:text-blue-200/50" to={`/oneGame/${d._id}`}  ><strong>{d.title}</strong></Link>
              </div>
            ))
          }
        </div>

      </div>
      
      <div className="bg-slate-800/90 flex flex-row p-2 md:justify-evenly justify-between uppercase font-press-start text-xs md:text-xl text-center  ">
  
        <Link className='mx-auto my-4 py-2 px-8 text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300' to="/createGame">Add new Game</Link>

      </div>

      <Separator />

    </div>
  )
}

export default GamesPage