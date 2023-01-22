
import { useState, useEffect } from 'react';
import {GET} from '../../hooks/UseFetch';
import Message from '../message';

import './messageList.css';


const MessageList = ({numberPost, search, }) => {
    const[messageList, setmessageList]= useState([]);
   useEffect(() =>{

       GET('posts')
       .then(({posts})=>
       numberPost=== 'full' ? setmessageList(posts.filter((post) => post.title.includes(search)))
       : setmessageList(posts.filter((post)=> post.id <= numberPost))
   )}, [search]);

    return ( 
    <div className='MessageList'>
    {messageList.map((message)=> <Message data ={message} textContent={numberPost=== 'full' ? 'full' :  'partial'} key ={message.id} />)}
    </div>)
}

export default MessageList