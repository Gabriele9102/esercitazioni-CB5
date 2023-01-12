
import './App.css';
import Selector from './components/selector/Selector';
import { Appliance } from './fetch/components/appliances/Appliances';
import { Banks } from './fetch/components/banks/Banks';
import { BloodTypes } from './fetch/components/blood_types/Blood_Types';
import CreditCard from './fetch/components/credit_card/CreditCard.jsx'
import { useState } from 'react';
import Counter from './components/counter/Counter';


function Default (){

  return <div>Select your choice</div>
}

const choiceMap = {
  default: Default,
  Credit_Card: CreditCard,
  banks: Banks,
  bloodTypes: BloodTypes,
  appliance: Appliance,
  Counter: Counter

}
function App() {
  const [Render, setRender] = useState('default')

  const selectHandler = (event) => {
    setRender(event.target.value)
  }

  const Dynamic = choiceMap[Render];

  return (
    <div className="App">
      <Selector selectHandler={selectHandler}/>
      
      <Dynamic />
      {/* <CreditCard />
      <hr />
      <Banks />
      <hr />
      <BloodTypes />
      <hr />
      <Appliance />
      <hr /> */}

    </div>
  );
}

export default App;
