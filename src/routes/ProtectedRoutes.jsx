import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext"



const ProtectedRoutes = ({ children }) => {

  const { user } = useAuthContext()


  if(!user) {

   return <Navigate to={"/Login"} />
  }
  

  return children
}


export default ProtectedRoutes