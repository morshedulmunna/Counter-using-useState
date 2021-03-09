import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div className='main-part'>
      <h1>Counter</h1>
      <h1> {count} </h1>
      <button onClick={() => setCount(count - 1)} >DECREASE</button>
      <button onClick={() => setCount(0)} >RESTART</button>
      <button onClick={() => setCount(count + 1)} >INCREASE</button>

    </div >
  );
}

export default App;
