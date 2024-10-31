import { useState } from 'react'
import './App.css'

// src/App.jsx

const App = () => {
  // construct the cityInput state
  const [cityInput, setCityInput] = useState('');

  return (
    <>
      <label htmlFor="cityInput">City: </label>
      <input id="cityInput" 
      name="cityInput" 
      type="text" 
      value={cityInput} 
      onChange={ handleChange }/> {/* Without onChange event handler, this wont update */}
    </>
  );

  /* Functions */

  function handleChange(event) {
    setCityInput(event.target.value)
  }
};

export default App;


