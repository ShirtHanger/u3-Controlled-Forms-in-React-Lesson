// src/App.jsx

import './App.css'

// import the useState() hook
import { useState } from 'react';

const App = () => {
  // add placeholder text for the title
  // we'll use the form to update this state by the end of this lesson
  const [title, setTitle] = useState('The full name will appear here.');
  // declaring state with an empty string as the initial value
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <>
    <h2>{title}</h2>
    <form>
      <label htmlFor="firstName">First Name: </label>
      <input
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
    </form>
  </>
  );

  /* Functions */

  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }

};

export default App;

