import logo from './logo.svg';
import './App.css';
import {useState , useReducer} from "react"

const ACTIONS={
  INCREMENT: "increment",
  DECREMENT:"decrement"
}


function reducer( state,action ){
  switch (action.type){
    
    case ACTIONS.INCREMENT:
      return {count : state.count + 1} ; 

    case ACTIONS.DECREMENT:
      return {count :state.count-1};  
      
      default :
        return state; 
    }

}


function App() {


const [state , dispatch]= useReducer(reducer , { count : 0 } );
  // const [count,setCount]=useState(0);

  function increment(){
    // setCount(count+1);
    // setCount(i => i+1);
    dispatch({type: ACTIONS.INCREMENT});

  }

  function decrement(){
    // setCount(i => i+1);
    dispatch({type:ACTIONS.DECREMENT});

    
  }
  return (
    <>
    <button onClick={decrement}>-</button>
    <span>{state.count}</span>
    <button onClick={increment}>+</button>
    </>
  );
}

export default App;
