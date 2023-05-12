import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const register = async (email, password) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await axios.post('http://localhost:4000/register', {
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

    return { register, isLoading, error }
}
