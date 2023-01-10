import { useState } from 'react';
import Termometru from './Termometru';

function App() {
  const [temperatura, setTemperatura] = useState(1);
  const UNITS = ['C','F','K'];

  return (
    <div>
      {
        UNITS.map((unit, index) => (
          <Termometru
            unit={unit}
            temperatura={temperatura}
            setTemperatura={setTemperatura}
            key={`${unit}-${index}`}
          />
        ))
      }
    </div>
  )
}

export default App
