import "./modals.css";

const Modal = ({children}) => {

    return(
        <div className="modal">
            <div className="deploy"> {children}</div>
            <div className="overlay"></div>
        </div>
    )
}

export default Modal;