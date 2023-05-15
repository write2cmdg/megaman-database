import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()
  const { user } = useAuthContext()

    
    
    
    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)
        
        try {
            const response = await axios.post('http://localhost:4000/login', {
                email,
                password
            });

            const json = response.data;
            
            //save user to local storage
            localStorage.setItem('user', JSON.stringify(json));
            
            //update Auth context
            dispatch({type: 'LOGIN', payload: json});
            
            setIsLoading(false);
            
            
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    }
    
    if (user) {
        navigate("/allBosses");  
    }
    
    
    return { login, isLoading, error }
}