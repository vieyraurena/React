import React from "react";
import { useContext, useState, useEffect, createContext } from "react";

export const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [isOpened, setIsOpened] = useState(false)
    const [autoClose, setAutoClose] = useState(5000)
    const [position, setPosition] = useState("right")
    
    const sendAlert = ({type, message}) => {
        setMessage(message)
        setType(type)
        setIsOpened(true)
        setPosition(!position ? 'rigth' : position)
        setAutoClose(!autoClose ? 5000 : autoClose)
    };

    useEffect(() => {
        const alertTimer = setTimeout(() => {
            setIsOpened(false)
        }
            , autoClose)
        return () => clearTimeout(alertTimer)
    })

    return (
        <AlertContext.Provider value={{ sendAlert, type, message, isOpened, position}}>
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