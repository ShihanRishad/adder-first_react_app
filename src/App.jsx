import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';


function Cbutton({ setCount, count, addrate }) {
  return (
    <md-filled-button style={{ margin: '10px' }} className='btn' onClick={() => setCount(count + addrate)}>
      Increase!
    </md-filled-button>
  );
}

function Addrate({ addrate, setAddrate, count, setCount, price, setPrice }) { // Add count and setCount props
  function doit() {
    if (count >= 20) { // Check if enough points are available
      setCount(count - price);
      setAddrate(addrate * 2);
      setPrice(price * 2);

    } else {
      alert("Not enough points to increase speed!"); // Or handle insufficient points in a better way
    }
  }
  return (
    <md-outlined-button style={{ margin: '10px' }} onClick={doit} className='increase btn'>
      Faster (-20)
    </md-outlined-button>
  );
}

function Add({ count }) {
  return (
    <p className='num'>{count}</p>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [addrate, setAddrate] = useState(1);
  const [price, setPrice] = useState(20);
  return (
    <>
      <h1>Adder</h1>
      <Add count={count} />
      <Cbutton setCount={setCount} count={count} addrate={addrate} />
      <Addrate price={price} setPrice={setPrice} addrate={addrate} setAddrate={setAddrate} count={count} setCount={setCount} /> {/* Pass count and setCount */}
    </>
  );
}


export default App;