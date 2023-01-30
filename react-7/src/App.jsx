import { ThemeProvider } from './ThemeContext';
import Button from './Button';
import Wrapper from './Wrapper';

function App() {

  return (
    <ThemeProvider value="dark">
      <div className="App">
        <Wrapper>
          <Wrapper>
            <Wrapper>
              <Wrapper>
                <Button />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </div>
    </ThemeProvider>

  )
}

export default App
