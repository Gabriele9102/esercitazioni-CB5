
import { useState, useEffect } from 'react';
import { GET } from '../../hooks/UseFetch';
import Friend from './../friend/index';
import './friendList.css';
const FriendList = ()=> {
  const[multipleFriendList, setMultipleFriendList]= useState([]);

  useEffect(()=>{
    GET("users")
    .then((data)=> setMultipleFriendList(data.users));
  }, []);
 
    return (
      <div className='FriendList'>
        {multipleFriendList.map((friend)=>(
          <Friend data={friend} key={friend.id}/>
        ))}
      </div>
    )
  }

  export default FriendList;

