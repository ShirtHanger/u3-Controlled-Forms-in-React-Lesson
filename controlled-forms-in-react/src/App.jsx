// src/App.jsx

import './App.css'

// import the useState() hook
import { useState } from 'react'

const App = () => {
  // add placeholder text for the title
  // we'll use the form to update this state by the end of this lesson
  const [title, setTitle] = useState('The full name will appear here.')

  // Replace the firstName and lastName state variables with the following:
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  })

  return (
    <>
    <h2>{title}</h2>
    <form>
      <label htmlFor="firstName">First Name: </label>
      <input
          id="firstName"
          name="firstName"
          value={formData.firstName} /* Dot notation to target the "formData" object */
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName} /* Dot notation to target the "formData" object */
          onChange={handleChange}
        />
    </form>
  </>
  )

  /* Functions */

  /* function handleFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)
  } */

  function handleChange(event) {
    /* Replaces old object with new object */
    /* Does so by targetting parameter inside of the above HTML objects above (Nam ) */
    /* (Broooo wtf is this??) */
    setFormData( 
      {... formData, [event.target.name]: event.target.value }
    ) 
    
  }

}

export default App

