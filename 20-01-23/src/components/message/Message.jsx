import { GET } from '../../hooks/UseFetch';
import { useState, useEffect } from 'react';
import './message.css';

const Message = ({data, textContent}) => {
    const [user, setUser] = useState({});

    useEffect(()=>{
        GET(`users/${data.userId}`)
        .then((user)=>setUser(user))
        
    },[]);

    return(
        <div className="Message">
        <img src={user.image} alt={user.firstName} />
        <div  className="textContent">
          <p className='nameUser'>{user.firstName} {user.lastName}</p>
          <h6 className='userName'>@{user.username}</h6>
          {/* <p>{user.company.address.city}</p> */}
          <h4>{data.title}</h4>
          {textContent === "full" && <p>{data.body}</p> }
          {textContent === "full" && <button className='reply'>Reply</button>}
        </div>
      </div>
    )
}

export default Message;