
import './App.css';
import { Appliance } from './fetch/components/appliances/Appliances';
import { Banks } from './fetch/components/banks/Banks';
import { BloodTypes } from './fetch/components/blood_types/Blood_Types';
import CreditCard from './fetch/components/credit_card/CreditCard.jsx'

function App() {
  return (
    <div className="App">
      
      <CreditCard />
      <hr />
      <Banks />
      <hr />
      <BloodTypes />
      <hr />
      <Appliance />
      <hr />

    </div>
  );
}

export default App;
