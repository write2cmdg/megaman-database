import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()
    const { user } = useAuthContext()

    const register = async (email, password) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await axios.post('https://megaman-api-server.onrender.com/register', {
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

    return { register, isLoading, error }
}
