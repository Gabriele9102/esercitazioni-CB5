import { GET } from '../../hooks/UseFetch';
import { useState, useEffect } from 'react';
import './message.css';

const Message = ({data}) => {
    const [user, setUser] = useState({});

    useEffect(()=>{
        GET(`users/${data.userId}`)
        .then((user)=>setUser(user))
        
    },[]);

    return(
        <div className="Message">
        <img src={user.image} alt={user.firstName} />
        <div className="textContent">
          <p className='nameUser'>{user.firstName} {user.lastName}</p>
          <h6 className='userName'>@{user.username}</h6>
          {/* <p>{user.company.address.city}</p> */}
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
      </div>
    )
}

export default Message;