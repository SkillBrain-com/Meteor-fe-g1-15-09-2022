import { useState } from 'react';
import Termometru from './Termometru';

function App() {
  const [temperatura, setTemperatura] = useState(1);

  return (
    <div>
      <Termometru
        unit="C" 
        temperatura={temperatura}
        setTemperatura={setTemperatura}
      />
      <Termometru
        unit="F" 
        temperatura={temperatura}
        setTemperatura={setTemperatura}
      />
      <Termometru
        unit="K" 
        temperatura={temperatura}
        setTemperatura={setTemperatura}
      />
    </div>
  )
}

export default App
