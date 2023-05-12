import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext"
import { toast } from 'react-toastify';



const ProtectedRoutes = ({ children }) => {

  const { user } = useAuthContext()

  
  useEffect(() => {
    if(!user) {
      <Navigate to={"/Login"} />
    }
    toast('Please Login or Register')
  }, [])
  
    
    return children
  }
  
export default ProtectedRoutes