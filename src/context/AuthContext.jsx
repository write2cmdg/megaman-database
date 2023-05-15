import { createContext, useReducer, useEffect } from "react";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext()
let isAuth = false


export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return  { user: null }
            default:
            return state
    }
}
            
export const AuthContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        
        if (user) {
            isAuth = true;
            dispatch({ type: 'LOGIN', payload: user})
        }
 
        
    }, [])
    
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
            {/* { isAuth ? children : <Login /> } */}
        </AuthContext.Provider>
    )
}