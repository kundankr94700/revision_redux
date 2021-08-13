import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,signin } from './Action';

function App() {
  //
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <br></br>
        <div className='form'>
        {isLogged?<h3 style={{textAlign:'center'}}>Logged In</h3>:" "}

           <h1>counter {counter}</h1>
        <button className='btn' onClick={()=>dispatch(increment())}>Increase</button>
        <button className='btn' onClick={()=>dispatch(decrement())}>Decrease</button>
        <button className='btn' onClick={()=>dispatch(signin())}>{isLogged?'Logout':"Login "}</button>
       </div>
      

        
      </header>
    </div>
  );
}

export default App;
