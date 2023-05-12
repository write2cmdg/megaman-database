import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist'

//component imports
import Separator from '../components/Separator'

//library imports
import { toast } from 'react-toastify'

const BossCreatePage = () => {
  
  const [values, setValues] = useState({
    name: '',
    hp: '',
    weapon: '',
    attack: '',
    weakness: '',
    game: ''
  })
  
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/createBoss', values)
    .then(res => {navigate('/allBosses')})
    .catch(err => console.log(err));
    toast.success("You've Created a New Robot Master!")
  }

  return (
    
    <div>

      <Separator />

      <div className="bg-slate-800/90 flex flex-row justify-evenly">

        <h2 className='
        p-4 justify-center mx-auto
        text-blue-200 text-xl w-screen md:text-3xl text-center font-press-start uppercase
        '>new Robot Master</h2>

      </div>

      <div className='text-blue-200 font-bold bg-slate-800/90'>

        <Form onSubmit={handleSubmit} className="px-8 sm:w-3/4 xl:w-1/2 w-screen p-2 flex flex-col text-left mx-auto uppercase">

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="name">Name: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="name" id="name" placeholder='Required' onChange={e => setValues({...values, name: e.target.value})}/>
          </div>

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="hp">hp: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="hp" id="hp" placeholder='Required'  onChange={e => setValues({...values, hp: e.target.value})} />
          </div>

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="weapon">Weapon: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="weapon" id="weapon" placeholder='Required'  onChange={e => setValues({...values, weapon: e.target.value})} />
          </div>

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="attack">Attack: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-4 p-1  border-blue-900 rounded-lg' type="text" name="attack" id="attack" placeholder='Required'  onChange={e => setValues({...values, attack: e.target.value})} />
          </div>

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="weakness">Weakness: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="weakness" id="weakness" placeholder='Required'  onChange={e => setValues({...values, weakness: e.target.value})} />
          </div>

          <div className="mb-2 flex flex-row justify-between">
            <label className='w-1/3 font-press-start' htmlFor="game">Game: </label>
            <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="game" id="game" placeholder='Required'  onChange={e => setValues({...values, game: e.target.value})} />
          </div>

          <button className="uppercase mt-8 font-press-start text-lg hover:text-yellow-200 hover:bg-red-800 hover:border-red-900 text-blue-200 capitalize bg-blue-900 my-2 border-blue-900 border-4 p-1 rounded-lg">Submit</button>

        </Form>

      </div>

      <Separator />

    </div>
  )
}

export default BossCreatePage