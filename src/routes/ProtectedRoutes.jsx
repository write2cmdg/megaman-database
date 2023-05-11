import React from 'react'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoutes = ({ children }) => {
    const isAuthorized = true;

    if(!isAuthorized){
        toast('Please Login')
        return <Navigate to={"/Login"} />
    }

  return children
}

export default ProtectedRoutes