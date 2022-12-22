
import './App.css';
import { Btn } from './Components/Buttons/Button console';
import { Text } from './Components/Text/Text';
import { Btn2 } from './Components/Buttons/Button Fake';


function App() {

  const console = "Hello Console!"
  return (
    <div className='app'>
      <Text variant= 'title'>{console}</Text>
     <Btn/>
     <Btn2/>
     
    </div>
  )
}

export default App;
