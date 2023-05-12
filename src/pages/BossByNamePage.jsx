import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist'
import Separator from '../components/Separator'
import { toast } from 'react-toastify'



const BossByNamePage = () => {
    
  const [ data, setData] = useState({})
  const { id } = useParams();
  const navigate = useNavigate('/allBosses/')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/oneBossByName/' + id);
        setData(response.data);
    } catch (err) {
        console.log(err);
        // display error message to user
    }
};
fetchData();
}, []);

const handleDelete = (id) => {
    
  const confirm = window.confirm(`Delete Robot Master: ${data.name} Permanently?`);
  if(confirm) {
      axios.delete('http://localhost:4000/deleteBoss/'+ id)
      .then(response => navigate(`/allBosses/`))
      .catch(err => console.log(err));
    toast.success(`You've Permanently Deleted ${data.name}!`)
  }
}

const imgName = data.name
  
console.log(data.name)
{data && data.name && (
    console.log(`img name: ${imgName.replace(' M', 'm')}.jpg`)
    )}

return (
    
    <div>

      <Separator className="mb-auto" />

      {data &&

<div className="bg-slate-800/90 flex flex-row justify-evenly">

            <h2 className='
            p-4 justify-center mx-auto
            text-blue-200 text-xl w-screen md:text-3xl text-center font-press-start uppercase
            '>{data.name} </h2>

        </div>}

        {data &&

        <div className='py-8 flex flex-row justify-evenly lg:h-80 h-44  bg-slate-800/90 overflow-hidden overflow-y-auto scrollbar scrollbar-rounded-large scrollbar-thumb-blue-900 scrollbar-track-blue-900/40 hover:scrollbar-thumb-blue-200/50'>


            <div className='h-full text-blue-200 p-4 text-sm lg:text-xl flex flex-col ml-8 justify-evenly'>
                <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>hp:</strong> {data.hp}</h2>
                <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>weapon:</strong> {data.weapon}</h2>
                <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>attack:</strong> {data.attack}</h2>
                <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>weakness:</strong> {data.weakness}</h2>
                <h2 className='capitalize'><strong className='uppercase font-press-start text-md align-middle'>game:</strong>  <Link to={`/oneGameByName/${data.game}`}  className="sm:text-3xl text-lg capitalize hover:text-blue-200/50">{data.game}</Link></h2>
            </div>

            {data.name && (
             <img className='border-8 border-blue-600 rounded-lg' src={`/images/${imgName.replace(" M", "m")}.png`} alt='' onError={({currentTarget}) => {
              currentTarget.onError = null;
              currentTarget.src="/images/Dr_Wily.png";
            }} />
            )}

        </div>
        }

        {data &&
        
        <div className="bg-slate-800/90 flex flex-row p-2 md:justify-evenly justify-between uppercase font-press-start text-xs md:text-xl text-center">

            <Link className=' text-lg text-blue-200 underline hover:text-yellow-300' to={`/updateBoss/${data._id} `}>update</Link>

            <button onClick={e => handleDelete(data._id)} className='font-extrabold text-lg text-red-800 underline hover:text-yellow-300 uppercase'>delete</button>

        </div>}
      

      <Separator className="mt-auto"/>

    </div>
  )
}

export default BossByNamePage