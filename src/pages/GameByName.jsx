import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist'
import Separator from '../components/Separator'



const GameByName = () => {

       
  const [ data, setData] = useState({})
  const { id } = useParams();
  const navigate = useNavigate('/allBosses/')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/oneGameByName/' + id);
        setData(response.data);
      } catch (err) {
        console.log(err);
        // display error message to user
      }
    };
    fetchData();
  }, []);

console.log(data)

const handleDelete = (id) => {
    
    const confirm = window.confirm(`Delete Game: ${data.title} Permanently?`);
    if(confirm) {
        axios.delete('http://localhost:4000/deleteBoss/'+ id)
        .then(response => navigate(`/allBosses/`))
        .catch(err => console.log(err));
    }
}



  return (
       <div>

      <Separator />

      {data &&

        <div className="bg-slate-800/90 flex flex-row justify-evenly"> 

            <h2 className='
            p-4 justify-center mx-auto
            text-blue-200 text-xl w-screen md:text-3xl text-center font-press-start uppercase
            '>Robot Master: {data.title} </h2>

        </div>}

        {data &&

            <div className='lg:h-80 h-44  bg-slate-800/90 overflow-hidden overflow-y-auto scrollbar scrollbar-rounded-large scrollbar-thumb-blue-900 scrollbar-track-blue-900/40 hover:scrollbar-thumb-blue-200/50'>



            <div className='h-full text-blue-200 p-4 text-sm lg:text-xl flex flex-col ml-8 justify-evenly'>

            <div>
                <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>Title:</strong> {data.title}</h2>
                <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>Year:</strong> {data.year}</h2>
                <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>Story:</strong> {data.story}</h2>
                <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>Robot Masters:(Scroll Down) </strong></h2>
            
            </div>

            </div>
                <div className='text-blue-200'>
                {
                    data.bosses && data.bosses.map((boss, ind) => (
                
                    <div className='flex flex-col items-center justify-center h-12' key={ind}>
                        <Link to={`/oneBossByName/${boss}`}  className="sm:text-3xl text-lg capitalize hover:text-blue-200/50"><strong>{boss}</strong></Link>
                    </div>
                    ))
                }
                </div>

            

            </div>
        }

        {data &&
        
            <div className="bg-slate-800/90 flex flex-row p-2 md:justify-evenly justify-between uppercase font-press-start text-xs md:text-xl text-center">

                <Link className='text-blue-200 underline hover:text-yellow-300' to={`/updateBoss/${data._id} `}>update</Link>
                <button onClick={e => handleDelete(data._id)} className='font-extrabold text-lg text-red-800 underline hover:text-yellow-300 uppercase'>delete</button>

            </div>
        }
        

      <Separator />

    </div>
  )
}

export default GameByName