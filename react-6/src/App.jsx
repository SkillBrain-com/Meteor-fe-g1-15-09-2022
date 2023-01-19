import { useState } from 'react';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import ElegantControlledForm from './components/ElegantControlledForm';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
        <ControlledForm/>
        <UncontrolledForm/>
        <ElegantControlledForm/>
    </div>
    
  )
}

export default App
