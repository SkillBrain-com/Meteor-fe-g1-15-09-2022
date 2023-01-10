import './App.css'
import PersonsTable from "./PersonsTable";
import {fetchPersonList} from "./Data";
import {useState} from 'react';
import { useEffect } from 'react';

function App() {
  const [persons , setPersons] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formHasError, setFormHasError] = useState(false);

  useEffect(() => {
    const data = fetchPersonList();
    setPersons(data);
  }, []);

  function handleOnFirstNameChange(event){
    setFirstName(event.target.value);
    setFormHasError(false);
  }

  function handleOnLastNameChange(event){
    setLastName(event.target.value);
    setFormHasError(false);
  }

  function handleOnAddPerson(){
    if (firstName === "" || lastName === "") {
      setFormHasError(true);
      return;
    }

    const newPerson = {
      id: persons.length + 1,
      firstName: firstName,
      lastName: lastName,
    };

    setPersons([...persons, newPerson]);
    setFirstName("");
    setLastName("");
  }


  return (
    <div>
      <div>
        <div>
          <label htmlFor="firstName">Prenume</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleOnFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Nume</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleOnLastNameChange}
          />
        </div>
        <button onClick={handleOnAddPerson}>Adauga</button>
      </div>
      <div>
        {
          formHasError && <p className="error">Ambele campuri trebuie completate</p>
        }
        
      </div>
      <PersonsTable persons={persons} />
    </div>
  )
}

export default App
