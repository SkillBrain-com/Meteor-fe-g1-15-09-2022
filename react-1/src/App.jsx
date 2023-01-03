import './App.css'
import { useState } from "react";
import NameText from './NameText'

function App() {
  const NAMES = [
    "Paul",
    "Bianca",
    "Gabriela",
    "Alexandra",
    "Adriana",
    "Filip",
    "Cezar",
  ];

  const [nameList, setNameList] = useState(NAMES);
  const [inputText, setInputText] = useState("");

  const handleOnClick = () => {
    const newNameList = [inputText, ...nameList];
    setNameList(newNameList);
  }

  const handleNameInputChange = (event) => {
    setInputText(event.target.value);
  }

  function createContent() {
    return nameList.map(name => <NameText name={name} />);
  }

  return (
    <div >
      <div>
        <input onChange={handleNameInputChange} />
        <button onClick={handleOnClick}>Add name</button>
      </div>
      {createContent()}
    </div>
  )
}

export default App