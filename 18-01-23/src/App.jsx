
import Button from './Atoms/button/Button';
import FriendList from './components/friendList/FriendList';
import MessageList from './components/messageList/MessageList';
import NewMessageInp from './components/newMessageInp/NewMessageInp';
import Modal from './components/modals';
import Filter from './Atoms/filter/Filter';
import { useState } from 'react';
import './App.css';


function App() {
  const[isModalDeploy, setModalDeploy] = useState(false)
  const [stateFilter, setStateFilter] = useState('')
  const onHandleDeploy= () => setModalDeploy((prev) => !prev);

  return (
    <div className="App">
    <div className='sectionFriends'>
      <FriendList />
    </div>
    <div className='heroSection'>
    {isModalDeploy ?
    <Modal>
      <NewMessageInp />
    </Modal> : false
    }
      <Filter setState={setStateFilter}/>
      <MessageList numberPost={"full"} search={stateFilter}/>
    </div>
    
    <div className='popular'>
    <MessageList numberPost={8}/>
    </div>
      <Button isModalDeploy={isModalDeploy} func={onHandleDeploy}/>
    </div>
  );
}

export default App;
