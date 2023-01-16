
import './App.css';
import MessageList from './components/messageList/index';
import NewMessageInp from './components/newMessageInp/index';

function App() {
  return (
    <div className="App">
    <NewMessageInp />
     <MessageList />
    </div>
  );
}

export default App;
