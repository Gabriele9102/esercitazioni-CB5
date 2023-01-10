import './lotteria.css'
import React, { useState } from 'react'

const Lotteria = (props) => {
    const [num, setnum] = useState(Math.floor(Math.random() * 91));
    const [numEs, setnumEs] = useState([]);

  const check = () => (numEs.length == 5 ? true : false);
  const count = check();
    
    function memory(){

        const numEs = { num: num };

        const RandomNum = () => Math.floor(Math.random() * 91);
        const newNum = RandomNum();
        setnum(newNum);

        setnumEs(pastnum => [...pastnum, numEs]);
    }

    console.log(numEs)


  return (
    <div>
      <h1> Estrazione Lotto</h1>
      <p>numero estratto : {num}</p>
      <button {...(count && { disabled: true })}  onClick={memory}> Estrazione </button>
      <p>numeri usciti :{numEs.map((numEs)=>{return(-numEs.num)})}</p>
    </div>
  )
}
export default Lotteria
