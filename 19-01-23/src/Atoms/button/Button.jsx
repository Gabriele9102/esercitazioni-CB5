import './button.css';

const Button = ({isModalDeploy, func}) => {

    return ( <button onClick={func} className={`Button ${isModalDeploy ? "on" : "off"}  `}>{isModalDeploy ? "❌" : "➕"} </button>
    )
}

export default Button;