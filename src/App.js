import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from "react"
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  Delete_todo:'delete_todo'
}


function reducer(todos, action) {

  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.TOGGLE_TODO:
      return todos.map(i => {
        if (i.id == action.payload.id) {
          return { ...i , complete : !i.complete}
        }
        return i
      })

    case ACTIONS.Delete_todo:
      return todos.filter( i =>{ 
        if (i.id != action.payload.id){
          return i ;
        }
      } );
      
    default:
      return todos;    
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

function App() {

  function test(){
    console.log("teeest");
  }

  function handleSubmit(e) {

    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  }

  const [todos, dispatch] = useReducer(reducer, []);

  const [name, setName] = useState('');

  // console.log(todos);

  return (
    <>

      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>

      {todos.map(todo => {
      
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} test={test}/>

      })}

    </>
  );
}

export default App;
