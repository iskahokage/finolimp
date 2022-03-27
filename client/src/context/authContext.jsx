import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { API } from '../consts';

export const authContext = createContext()

const INIT_STATE ={
    users: []
}

const reducer = (state=INIT_STATE, action) =>{
    switch (action.type) {
        case "LOGIN_USER":
            return{
                ...state,
                users: action.payload.data
            }
        case "REGISTER_USER":
            return{
                ...state,
                user: action.payload.data
            }
    
        default:
            break;
    }
}

const AuthContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const registration = async(authData) => {
        const response = await axios.post(`${API}/registration`, authData)
        dispatch({
            type: "REGISTER_USER",
            payload: response
        })
    }

    const login = async(authData)=>{
        const response = await axios.post(`${API}/login`, authData)
        dispatch({
            type: "LOGIN_USER",
            payload: response
        })
    }

    return (
        <authContext.Provider
            value={{
                users: state.users,
                registration,
                login
            }}
        >
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;