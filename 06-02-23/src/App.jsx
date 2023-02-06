
import { useReducer } from 'react';
import styles from './App.module.scss';

function counter(state, action) {
  if (action.type === "Increment"){
    return{
      count: state.count + 1
    }
  } else if(action.type === "Decrement"){
    return {
      count: state.count - 1
    }
  }

  console.log(action)
  console.log(state)
}


function App() {
  const [state, dispatch] = useReducer(counter, {count: 0});
 

  return (<>
      <h1>Counter</h1>
    <div className={styles.App}>
        <button onClick={() => { dispatch({ type: "Decrement"})}}> -1</button>
          <h5>{state.count}</h5>
        <button onClick={() => { dispatch({ type: "Increment"})}}> +1</button>
    </div>
   </>
    
  )
}

export default App
