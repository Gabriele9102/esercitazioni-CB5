
import { useState, useEffect } from 'react';
import {GET} from '../../hooks/UseFetch';
import Message from '../message';

import './messageList.css';


const MessageList = () => {
    const[messageList, setmessageList]= useState([]);
   useEffect(() =>{

       GET('posts')
       .then(({posts})=> setmessageList(posts));
   }, []);

    return ( 
    <div className='MessageList'>
    {messageList.map((message)=> <Message data ={message} key ={message.id} />)}
    </div>)
}

export default MessageList