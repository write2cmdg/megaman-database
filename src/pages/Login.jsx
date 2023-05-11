import React from 'react'
import { Form } from 'react-router-dom'
import Separator from '../components/Separator'

const Login = () => {
  return (
    <div>

      <div className="flex flex-col justify-center">
          <Separator />
          <div className="bg-slate-800/90 flex flex-row justify-evenly">
            <h2 className='
            p-4 justify-center mx-auto
            text-blue-200 text-xl w-screen md:text-3xl text-center font-press-start uppercase
            '>Login</h2>
          </div>
          <div className='text-blue-200 font-bold bg-slate-800/90'>
            <Form className="px-8 sm:w-3/4 xl:w-1/2 w-screen p-2 flex flex-col text-left mx-auto uppercase">
              <div className="mb-2 flex flex-row justify-between">
                <label className='w-1/3 font-press-start' htmlFor="email">email: </label>
                <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="email" id="email" placeholder='Required' onChange={e => setValues({...values, email: e.target.value})}/>
              </div>
              <div className="mb-2 flex flex-row justify-between">
                <label className='w-1/3 font-press-start' htmlFor="pwd">password: </label>
                <input className='w-1/2 pl-3 bg-blue-200 text-blue-900 capitalize border-blue-900 border-4 p-1 rounded-lg' type="text" name="pwd" id="pwd" placeholder='Required'  onChange={e => setValues({...values, pwd: e.target.value})} />
              </div>
              <button className="uppercase mt-8 font-press-start text-lg hover:text-yellow-200 hover:bg-red-800 hover:border-red-900 text-blue-200 capitalize bg-blue-900 my-2 border-blue-900 border-4 p-1 rounded-lg">Submit</button>
            </Form>
          </div>
          <Separator />
      </div>

    </div>
  )
}

export default Login