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
    <form onSubmit={handleSubmit}> {/* Prevents default behavior, the page refresh */}
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
        <button type='submit'>Submit your name, for the algorithm</button>
    </form>
  </>
  )

  /* Functions */

  function handleChange(event) {
    /* Replaces old object with new object */
    /* Does so by targetting parameter inside of the above HTML objects above (Name="firstName") */
    /* (Broooo wtf is this??) */
    setFormData( 
      {... formData, [event.target.name]: event.target.value }
    ) 
  }

  /* Prevents page refresh from a form */
  function handleSubmit(event) {
    event.preventDefault()
    console.log('The page has not refreshed... good')
    // Sets title based on the formData's contents at the time of submission
    setTitle(`Your name is: ${formData.firstName} ${formData.lastName}`)
    // Clears form input
    setFormData({ 
      firstName: '', 
      lastName: '' 
    })
  }

}

export default App

