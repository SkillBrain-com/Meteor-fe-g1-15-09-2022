import { useState, useEffect } from "react";
import Dashboard from  './DashboardLifeCycle';

function App() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    // console.log("Preiau datele de pe meteor-api");
  }, []);

  console.log("Render");

  function handleClick(){
    setClicks(clicks + 1);
  }

  return (
    <div onClick={handleClick}>
      <h1>{clicks}</h1>
      {clicks % 2 === 0 && <Dashboard/>}
    </div>
  )
}

export default App
