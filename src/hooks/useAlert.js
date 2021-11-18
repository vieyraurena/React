import React from "react";
import { useContext, useState, useEffect, createContext } from "react";
import AlertTag from "../components/AlertTag";

export const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [isOpened, setIsOpenned] = useState(false)
    
    const sendAlert = ({type, message}) => {
        setMessage(message)
        setType(type)
        setIsOpenned(true)
    }

    

    useEffect(() => {
        const alertTimer = setTimeout(()=> {
            setIsOpenned(false)
        return () => clearTimeout(alertTimer)
        }, 5000)
        
    })

    return (
        <AlertContext.Provider value={{ sendAlert, type, message, isOpened, AlertTag}}>
            { children }
        </AlertContext.Provider>
    )
}

const useAlert = () => {
    const context = useContext(AlertContext)

    if (context === undefined) {
        throw new Error(
            'You must wrap your application with <AlertProvider /> in order to useAlert().',
          ) 
    }
    return context
}

export default useAlert