import './selector.css';

import React from 'react'

const Selector = (props) => {
  const { selectHandler} = props
  
  return (
    <form>

    <select defaultValue={''} onChange={selectHandler}>

      <option disabled value=''>Select your option</option>

      <option value='Counter'>Counter</option>

      <option value='Credit_Card'>Random credit card</option>

      <option value='banks'>Random Bank</option>

      <option value='bloodTypes'>Random blood type</option>

      <option value='appliance'>Random appliance</option>

    </select>

    </form>
  )
}





export default Selector
