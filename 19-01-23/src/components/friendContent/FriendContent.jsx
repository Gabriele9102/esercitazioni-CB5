import { GET } from '../../hooks/UseFetch';
import { useState, useEffect } from 'react';
import './friendContent.css';


const FriendContent = ({ friendId}) => {
    
    const [friendData, setFriendData]= useState({})

    useEffect(()=>{
        GET(`users/${friendId}`).then((friend) => setFriendData(friend))
    }, [])

    const {image, username, firstName, lastName, address} = friendData
    console.log (friendData)
    return(
        <div className='friendContent'>
        <img src={image} alt={username} />
        <h4>{`${firstName} ${lastName}`}</h4>
        <p>{username}</p>

        <p>{`${address?.city} - ${address?.city}`}</p>


        </div>
    )
}

export default FriendContent;