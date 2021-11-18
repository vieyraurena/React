import react from 'react'
import ReactDOM from 'react-dom'

const alertContainer = document.querySelector("#alert-root")

const AlertTag = ({ message, type, isOpened, onClose, success}) => {

    if (!isOpened) return null
    return ReactDOM.createPortal(
            <div className={`alert ${type}`}>
                <span>{message}</span>
            </div>,
        alertContainer
    )
}

export default AlertTag