import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

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

    return { login, isLoading, error }
}