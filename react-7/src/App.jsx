import {useState,useEffect} from "react";
import { ThemeProvider } from './ThemeContext';
import Button from './Button';
import Wrapper from './Wrapper';

const Data = [
  {letter: "A"},
  {letter: "B"},
  {letter: "C"},
  {letter: "D"},
  {letter: "E"},
];

function App() {
  const [theme, setTheme] = useState("dark");
  const [letterList, setLetterList] = useState([]);
  const [letterInputValue, setLetterInputValue] = useState("");

  useEffect(() => {
    setLetterList([...Data]);
  }, []);

  function handleAddElementClick(){
    if (letterInputValue.length < 3){
      return;
    }
    const newLetterList = [{letter: letterInputValue}, ...letterList];
    setLetterList(newLetterList);
    setLetterInputValue("");
  }

  function handleLetterInputChange(e){
    setLetterInputValue(e.target.value);
  }

  return (
    <div className="App">
      <input
        value={letterInputValue}
        onChange={handleLetterInputChange}
      />
      <button
        className="btn"
        onClick={handleAddElementClick}
      >Add Element</button>
      {
        letterList.map((el) => <h1>Letter {el.letter}</h1>)
      }

      <ThemeProvider value={{theme, setTheme}}>
        <Wrapper>
          <Wrapper>
            <Wrapper>
              <Wrapper>
                <Button />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </ThemeProvider>
    </div>


  )
}

export default App
