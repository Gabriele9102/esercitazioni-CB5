
import Button from './Atoms/button/Button';
import FriendList from './components/friendList/FriendList';
import MessageList from './components/messageList/MessageList';
import NewMessageInp from './components/newMessageInp/NewMessageInp';
import Footer from './components/footer/Footer';
import Modal from './components/modals';
import Filter from './Atoms/filter/Filter';
import { useState } from 'react';
import './App.css';
import FriendContent from './components/friendContent/FriendContent';


function App() {
  const[isModalDeploy, setModalDeploy] = useState(false)
  const [stateFilter, setStateFilter] = useState('')
  const[ modalContent , setModalContent] = useState('NewMessage')
  
  const onHandleDeploy= () => {
    setModalDeploy((prev) => !prev);
    setModalContent("NewMessage");
  }
  ;

  return (
    <div className="App">
    <div className='sectionFriends'>
      <FriendList setModalContent={setModalContent} setModalDeploy={setModalDeploy} />
    </div>
    <div className='heroSection'>
    {isModalDeploy ?
    <Modal setModalDeploy={setModalDeploy}>
    {modalContent === "NewMessage" ?  (<NewMessageInp  setModalDeploy={setModalDeploy}/>) : (<FriendContent friendId={modalContent}/>)}
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
