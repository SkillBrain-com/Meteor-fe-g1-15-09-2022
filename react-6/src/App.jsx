import { useState } from 'react';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleChangeFirstName(e){
    setFirstName(e.target.value);
  }

  function handleChangeLastName(e){
    setLastName(e.target.value);
  }

  function handleChangeCity(e){
    setCity(e.target.value);
  }

  function handleOnClearClick(){
    setFirstName("");
    setLastName("");
    setCity("");
  }

  function handleOnAddClick(){
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      city: city,
    };
    setUsers([...users, newUser])
    handleOnClearClick();
  }

  return (
    <div>
      {/* Input controlat */}
      <input
        value={firstName}
        onChange={handleChangeFirstName}
      />
      {/* Input controlat */}
      <input
        value={lastName}
        onChange={handleChangeLastName}
      />
      {/* Input controlat */}
      <input
        className={hasError ? 'error' : ''}
        value={city}
        onChange={handleChangeCity}
      />
      <input
        
        value={city}
        onChange={handleChangeCity}
      />
      <button onClick={handleOnAddClick}>Add</button>
      <button onClick={handleOnClearClick}>Clear</button>
      <table>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
