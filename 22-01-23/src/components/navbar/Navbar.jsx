
import { useState, useEffect } from 'react';
import users from '../../userAccess/userAccess';
import './navbar.css'

const Navbar = () => {
    const [userName, setUserName]= useState();


    useEffect(() => {
        setUserName(JSON.parse(sessionStorage.getItem("username")));
      }, []);

     const onLogOut = () => {
        sessionStorage.removeItem("username");
        window.location.reload();
      }

    return (
        <div className="navbar">
            <img src="https://img.freepik.com/premium-vector/robot-icon-chat-bot-sign-support-service-concept-chatbot-character-flat-style_41737-795.jpg?w=740" alt="LOGO" />
            <ul>
                <div className={userName ? 'loggedUser':'notLoggedUser'}></div>
                <li className='logUser' onClick={onLogOut}>
                        {userName ? (<img className='userPhoto' src={userName.Img} alt="User Photo" />) : "not logged "}
                </li>
                <li>
                <a href="#Home">HOME</a>
                </li>

                <li>
                <a href="#About">ABOUT</a>
                </li>

                <li>
                <a href="#Contacts">CONTACTS</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;