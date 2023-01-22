
import { useState, useEffect } from 'react';
import { GET } from '../../hooks/UseFetch';
import Friend from './../friend/index';
import Filter from '../../Atoms/filter/Filter';
import './friendList.css';
const FriendList = ({setModalContent, setModalDeploy})=> {
  const[multipleFriendList, setMultipleFriendList]= useState([]);
  const [filteredInput, setFilteredInput] = useState("");

  useEffect(()=>{
    GET("users")
    .then((data)=> setMultipleFriendList(data.users));
  }, []);
  
 
    return (
      <div className='FriendList'>
      <Filter setState={setFilteredInput}/>
        {/* {multipleFriendList.map((friend)=>(
          <Friend data={friend} key={friend.id}/>
        ))} */}
        {multipleFriendList.filter((friend)=> friend.firstName.includes(filteredInput) 
        || friend.lastName.includes(filteredInput))
        .map((friend)=>(<Friend data={friend} setModalDeploy={setModalDeploy} setModalContent={setModalContent} key={friend.id}/>))}
      </div>
    )
  }

  export default FriendList;

