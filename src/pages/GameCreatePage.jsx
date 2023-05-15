import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist'
import Separator from '../components/Separator'
import { toast } from 'react-toastify'

const GameCreatePage = () => {
  
  const [values, setValues] = useState({
    title: '',
    year: '',
    story: '',
    bosses: ''
  })
  
  const navigate = useNavigate()

  
  const handleSubmit = (e) => {
    e.preventDefault()
    const bossesArray = values.bosses.split(',').map(boss => boss.trim())
    const newValues = { ...values, bosses: bossesArray }
    axios.post('http://localhost:4000/createGame', newValues)
      .then(res => navigate('/allGames'))
      .catch(err => console.log(err))
    toast.success(`You've Created a New Game!`)
  }

  return (
    
    <div>

      <Separator />

      <div className="bg-slate-800/90 flex flex-row justify-evenly">

        <h2 className='
        p-4 justify-center mx-auto
        text-blue-200 text-xl w-screen md:text-3xl text-center font-press-start uppercase
        '>new Game</h2>

      </div>

      <div className='text-blue-200 font-bold bg-slate-800/90'>

        <Form onSubmit={handleSubmit} className="px-8 sm:w-3/4 xl:w-1/2 w-screen p-2 flex flex-col text-left mx-auto uppercase">

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="title">Title: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="title" id="title" placeholder='Required' onChange={e => setValues({...values, title: e.target.value})}/>
          </div>

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="year">year: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="year" id="year" placeholder='Required'  onChange={e => setValues({...values, year: e.target.value})} />
          </div>

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="story">story: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="story" id="story" placeholder='Required'  onChange={e => setValues({...values, story: e.target.value})} />
          </div>

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="bosses">bosses: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-4 p-1  border-blue-900 rounded-lg' type="text" name="bosses" id="bosses" placeholder='Required'  onChange={e => setValues({...values, bosses: e.target.value})} />
          </div>

          <button className="uppercase mt-8 font-press-start text-lg hover:text-yellow-200 hover:bg-red-800 hover:border-red-900 text-blue-200 capitalize bg-blue-900 my-2 border-blue-900 border-4 p-1 rounded-lg">Submit</button>

        </Form>

      </div>

      <Separator />

    </div>
  )
}

export default GameCreatePage