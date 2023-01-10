import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  return (
    <div>
      <div className="flex p-2 bg-orange-500 w-full items-center sticky top-0 drop-shadow">
        <h1 className="text-3xl mr-5">METEOR</h1>
        <div className="flex grow p-2 items-center">
          <input className="rounded w-1/2 p-1 mr-2" id="searchInput" />
          <span className="fa fa-search" />
        </div>
      </div>
      <div className="w-full p-8 flex justify-center">
        <table className="w-1/2">
          <thead>
            <tr className="bg-orange-100">
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
            </tr>
          </thead>
          <tbody id="booksTable">
  
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App
