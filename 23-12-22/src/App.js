
import { useState } from 'react';
import './App.css';

function App() {

  const[ newString, setNewString ]= useState('');

  const[strings, setStrings] = useState([
    {value: 'Study', id: 1},
    {value: 'Work', id: 2},
    {value: 'Sleep', id: 3}]);
  
  function add() {

    newString ? newString : alert('insert a value')

    if (newString ==''){
      Btn.style ='hidden'
    }


    const string ={
      value: newString,
      id: Math.floor(Math.random()*100)
    }
    console.log(strings);

    setStrings(pastString => [...pastString, string]);

    setNewString('');
  }

  function doneS(id) {

    const newContenitor = strings.filter(string => string.id !== id);
    setStrings(newContenitor);
  }

  
  return (
  
    <div className="App">

      <h1>Todo List App</h1>

      <input className='insert' type='text' 
      placeholder='Insert something to do...'
      value={newString}
      onChange={e => setNewString(e.target.value)}
      />

      <button className='btn_Plus' onClick={()=> add()}>+</button>

      <ul>
        {strings.map(string =>{
          return(
            <li key={string.id}>{string.value} 
            <label><input type="checkbox"/></label>
          <button className='btn_string' 
          onClick={() => doneS(string.id)}>🧨</button></li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
