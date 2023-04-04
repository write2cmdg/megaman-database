import axios from 'axios'
import React, { useEffect, useState } from 'react'


//rrd Imports
import { Link } from 'react-router-dom'


const BossesPage = () => {
  const [ data, setData] = useState([])
  const [ error, setError] = useState([])

  useEffect(() => {
  axios.get('http://localhost:4000/')
  .then(res => setData(res.data))
  .catch(err => setError(err.error.message));
  })

  
  return (
    <>
      <h2 className='text-xl md:text-2xl lg:text-3xl mx-auto w-2/3 p-6 text-3xl text-blue-900'>All Bosses</h2>
        <div className="w-screen min-h-[75%] flex bg-blue-100/50">
          <div className="w-1/2 flex flex-col items-center justify-center">
          {
            data.map((d, i) => (
              <Link to={"/"} key={d._id} >{d.name}</Link>
            ))
          }
          </div>    
        </div>
        <div className='z-50 text-xs md:text-lg lg:text-1xl mx-auto my-4 w-screen sm:w-2/3 flex flex-row justify-around cursor-pointer'>
          <Link to="/bosses/createBoss">CREATE BOSS</Link>
           <Link to="/bosses/boss">robot master</Link>
        </div> 
     
    </>
  )
}

export default BossesPage