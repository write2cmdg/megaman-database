
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist';
import Separator from '../components/Separator'
import { toast } from 'react-toastify';

function GameUpdatePage() {

  const [ data, setData] = useState({})
  const [ values, setValues] = useState({})
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:4000/oneGame/${id}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
    }, [])
  
    function handleSubmit(e) {
      e.preventDefault()
      const bossesArray = (values.bosses ?? '').split(',').map(boss => boss.trim())

      const updatedValues = {...values, bosses: bossesArray} // update values object with new array
      axios.put(`http://localhost:4000/updateGame/${id}`, updatedValues)
      .then(res => navigate(`/oneGame/${id}`))
      .catch(err => console.log(err));
      toast.success(`You've Successfully Updated ${data.title}!`)
    }
  

  return (
    
    <div>

      <Separator />

      <div className="bg-slate-800/90 flex flex-row justify-evenly">

        <h2 className='
        p-4 justify-center mx-auto
        text-blue-200 text-xl w-screen md:text-3xl text-center font-press-start uppercase
        '>Update {data.title}</h2>

      </div>

      <div className='text-blue-200 font-bold bg-slate-800/90'>

        <Form onSubmit={handleSubmit} className="px-8 sm:w-3/4 xl:w-1/2 w-screen p-2 flex flex-col text-left mx-auto uppercase">

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="title">Title: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="title" id="title" placeholder={data.title} onChange={e => setValues({...values, title: e.target.value})}/>
          </div>

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="year">year: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="year" id="year" placeholder={data.year}  onChange={e => setValues({...values, year: e.target.value})} />
          </div>

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="story">Story: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="story" id="story" placeholder={data.story}  onChange={e => setValues({...values, story: e.target.value})} />
          </div>

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="bosses">Bosses: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-4 p-1  border-blue-900 rounded-lg' type="text" name="bosses" id="bosses" placeholder={data.bosses}  onChange={e => setValues({...values, bosses: e.target.value})} />
          </div>
          
          <button className="mt-8 font-press-start text-lg hover:text-yellow-200 hover:bg-red-800 hover:border-red-900 text-blue-200 bg-blue-900 my-2 border-blue-900 border-4 p-1 rounded-lg uppercase">update</button>

        </Form>

      </div>

      <Separator />

    </div>
  )
}

export default GameUpdatePage