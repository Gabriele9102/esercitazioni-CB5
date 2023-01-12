import './counter.css';
import React from 'react'
import { useReducer } from 'react';

const Default = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "+1":
      return { count: state.count + 1 };
    case "-1":
      return { count: state.count - 1 };
    default:
      throw new Error('Invalid');
  }
}




function Counter() {
  const [state, dispatch] = useReducer(reducer, Default);

  return (
    <div>
    <h1>Counter</h1>
      <button className='button-8' disabled={state.count === 0} onClick={() => dispatch({ type: "-1" })}>-</button>
      {state.count}
      <button className='button-8' onClick={() => dispatch({ type: "+1" })}>+</button>
    </div>
  );
}

export default Counter