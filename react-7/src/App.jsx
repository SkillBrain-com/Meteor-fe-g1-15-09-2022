import {useState} from "react";
import { ThemeProvider } from './ThemeContext';
import Button from './Button';
import Wrapper from './Wrapper';

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="App">
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
