
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import { useState } from 'react';

function App() {
  const company = "Town";

  const [name, setName] = useState("Dev")

  return (
    <div className="App">
      <h1>Class component</h1>
      <ClassComponent />
      <br />
      <h1>
        <FunctionalComponent name={name} age={12} company={company} setName={setName} />

      </h1>
    </div>
  );
}

export default App;
