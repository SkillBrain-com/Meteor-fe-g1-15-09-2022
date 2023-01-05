import { useState } from 'react';
import Termometru from './Termometru';

function App() {
  const [temperatura, setTemperatura] = useState(1);

  function handleIncrementClick() {
    setTemperatura(temperatura + 1);
  }

  function handleDecrementClick() {
    setTemperatura(temperatura - 1);
  }

  return (
    <div>
      <Termometru unit="C" temperatura={temperatura}/>
      <Termometru unit="F" temperatura={temperatura}/>
      <Termometru unit="K" temperatura={temperatura}/>
      <button onClick={handleDecrementClick}>
        <h1>-</h1>
      </button>
      <button onClick={handleIncrementClick}>
        <h1>+</h1>
      </button>
    </div>
  )
}

export default App
