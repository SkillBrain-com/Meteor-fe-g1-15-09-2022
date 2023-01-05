import {useState} from 'react';
import MyComponent from './MyComponent';
import CountingButton from './CountingButton';
import { useEffect } from 'react';

const INITIAL_NAMES = [
  "Cezar", 
  "Alexandra",
  "Filip",
  "Alina",
  "Serban",
  "Adriana",
  "Paul",
];
function App() {  
  const [names, setNames] = useState(INITIAL_NAMES);
  const [filteredName, setFilteredName] = useState(INITIAL_NAMES);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://meteor-api.smart-part.ro/books")
      .then((response) => response.json())
      .then((bookList) => {
        const authorNames = bookList.map((book) => book.author);
        setNames(authorNames);
        setFilteredName(authorNames);
      });
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length > 0){
      const newFilteredNames = names.filter((name) => name.toLowerCase().includes(searchTerm));
      setFilteredName(newFilteredNames);
    }
    else {
      setFilteredName(names);
    }
  }

  const handleAddClick = () => {
    setNames([inputValue, ...names]);
    setInputValue("");
  };

  const content = filteredName.map((name, index) => (
    <div key={`${name}-${index}`} className='flex gap-2 mb-2'>
      <MyComponent name={name} />
      <CountingButton/>
    </div>
  ));

  return <div className='flex flex-col'>
    <div className='w-full flex bg-orange-500 sticky top-0 z-10 p-2 gap-2 drop-shadow-lg'>
      <h1 className='text-3xl'>METEOR</h1>
      <div className="w-2/3 flex items-center">
        <input
          className='border rounded mr-2'
          onChange={handleSearchChange}
        />
        <span className='fa fa-search'/>
      </div>
    </div>
    <div className='flex flex-col gap-2 border p-2 mt-4 mb-2'>
      <h6>Adauga un nume nou</h6>
      <div className='flex gap-2'>
        <input
          value={inputValue}
          className='border'
          onChange={handleInputChange}
        />
        
        <button
          className="bg-orange-500 hover:bg-orange-100 text-white hover:text-black p-1 drop-shadow-lg rounded-full flex justify-center w-32 align-center"
          onClick={handleAddClick}
        >
          Adauga
        </button>
      </div>
    </div>
    {inputValue}
    {content}
  </div>;
}

export default App;
