import { useRef, useState } from 'react';
import users from '../../userAccess/userAccess';

import './login.css'


const Login = () => {
    const showPass = useRef(null)
    const [login, setLogin] = useState({});
    
    const onSubmit = () => {
        if (users) {
            users.map((user) => {
              if (
                user.username === login.username &&
                user.password === login.password
              ) {
                sessionStorage.setItem(
                  "username",
                 JSON.stringify({ ...login, Img: user.Img })
                );
              }
            });
          }
          return console.log(login)
        };
    
    
    const onShowPass= () => {

        if (showPass.current.type === "text"){

            showPass.current.setAttribute("type", "password") 
        }
        else {
            showPass.current.setAttribute("type", "text")
        }

    }
    

    return(
        <div className="login">
            <img src="https://img.freepik.com/premium-vector/robot-icon-chat-bot-sign-support-service-concept-chatbot-character-flat-style_41737-795.jpg?w=740" alt="LOGO" />
            <h2>Login</h2>
            <form onSubmit={onSubmit}className="container" action='/' >
                <input type="text" value={login.username} onChange={(e)=>setLogin(prev => ({...prev, username: e.target.value}))} placeholder='User...' required/>
                <input type="password" value={login.password} onChange={(e)=>setLogin(prev => ({...prev, password: e.target.value}))} placeholder='Password...' ref={showPass} required/>
                <button className="hide_pass" onClick={onShowPass}>👁️</button>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;