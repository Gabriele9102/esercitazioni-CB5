import "./modals.css";

const Modal = ({children, setModalDeploy}) => {

 const onHandleModal = () => setModalDeploy(false)
    return(
        <div className="modal">
            <div className="deploy"> {children}</div>
            <div className="overlay" onClick={onHandleModal}></div>
        </div>
    )
}

export default Modal;
