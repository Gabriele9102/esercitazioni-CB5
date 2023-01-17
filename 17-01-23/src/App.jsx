
import './App.css';
import FriendList from './components/friendList/FriendList';
import MessageList from './components/messageList/index';
import NewMessageInp from './components/newMessageInp/index';

function App() {
  return (
    <div className="App">
    <div className='sectionFriends'>
      <FriendList />
    </div>
    <div className='heroSection'>
      <NewMessageInp />
      <MessageList />
    </div>
    </div>
  );
}

export default App;
