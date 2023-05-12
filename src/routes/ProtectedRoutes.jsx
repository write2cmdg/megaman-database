import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext"
import { toast } from 'react-toastify';



const ProtectedRoutes = ({ children }) => {

  let isAuthorized = false;
  const { user } = useAuthContext()

  if (user) {
    isAuthorized = true
  }

  if(!isAuthorized){
    return (
      <Navigate to={"/Login"} />
      )
    }
    
    return children
  }
  toast('Please Login or Register')
  
export default ProtectedRoutes