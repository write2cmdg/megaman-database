import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist'
import Separator from '../components/Separator'



const BossPage = () => {

  const [ data, setData] = useState([])
  const { id } = useParams();
  const navigate = useNavigate('/bosses/')

  useEffect(() => {
  axios.get('http://localhost:4000/'+ id)
  .then(res => setData(res.data))
  .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {

    const confirm = window.confirm(`Delete Robot Master: ${data.name} Permanently?`);
    if(confirm) {
      axios.delete('http://localhost:4000/'+ id)
      .then(res => navigate(`/bosses/`))
      .catch(err => console.log(err));
    }
  }

  return (

    <div>

      <Separator />

      <div className="bg-slate-800/90 flex flex-row justify-evenly">

        <h2 className='
        p-4 justify-center mx-auto
        text-blue-200 text-xl w-screen md:text-3xl text-center font-press-start uppercase
        '>Robot Master: {data.name} </h2>

      </div>

      <div className='lg:h-80 h-44  bg-slate-800/90 overflow-hidden overflow-y-auto scrollbar scrollbar-rounded-large scrollbar-thumb-blue-900 scrollbar-track-blue-900/40 hover:scrollbar-thumb-blue-200/50'>



        <div className='h-full text-blue-200 p-4 text-sm lg:text-xl flex flex-col ml-8 justify-evenly'>
          <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>HP:</strong> {data.HP}</h2>
          <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>weapon:</strong> {data.weapon}</h2>
          <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>attack:</strong> {data.attack}</h2>
          <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>weakness:</strong> {data.weakness}</h2>
          <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>game:</strong> {data.game}</h2>
        </div>

      </div>
      
      <div className="bg-slate-800/90 flex flex-row p-2 md:justify-evenly justify-between uppercase font-press-start text-xs md:text-xl text-center">

        <Link className='text-blue-200 underline hover:text-yellow-300' to={`/bosses/boss/updateBoss/${id} `}>update</Link>
        <button onClick={e => handleDelete(data._id)} className='font-extrabold text-lg text-red-800 underline hover:text-yellow-300 uppercase'>delete</button>

      </div>

      <Separator />

    </div>
  )
}

export default BossPage