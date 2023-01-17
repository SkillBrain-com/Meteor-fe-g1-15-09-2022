import { useState, useCallback } from 'react'
import './App.css'
import DataTable from './components/DataTable';
import TextComponent from './components/TextComponent';
import Navbar from './components/Navbar';
// useMemo
// useCallback

const DATE = [...new Array(100).keys()];

function App() {
  const [listaDate, setListaDate] = useState(DATE);
  const [cartCount, setCartCount] = useState(0);
  const [state3, setState3] = useState(0);

  const handleAddToCart = useCallback(() => {
    setCartCount(cartCount + 1);
  }, [cartCount]);

  const handle2 = useCallback(() => {
    setState3(state3 + 1);
  }, [state3]);

  return (
    <div>
          <TextComponent/>
          <Navbar cartCount={cartCount}/>
          <button onClick={handle2}>Random Button {state3}</button>
          <DataTable listaDate={listaDate} onButtonClick={handleAddToCart}/> 
    </div>
  )
}

export default App
