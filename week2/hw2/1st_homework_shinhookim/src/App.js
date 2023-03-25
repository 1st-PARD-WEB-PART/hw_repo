import './App.css';
import React, { useState, useEffect } from 'react';

function Input({ label, type, name, value, onChange }) {
  return (
    <label>
      {label}
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  );
};

function App() {
  const initialFormData = +localStorage.getItem('storageFormData')
    || {
    name: '',
    email: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  /*
    If you pass a Map object as a dependency to the useEffect hook, 
    the effect will only re-run if the reference to the Map object changes. 
    Updating a value for a key in the Map will not cause the effect to re-run because it does not change the reference to the Map object.

    useEffect(() => localStorage.setItem('storageFormData', formData.toString), [
      formData,
    ]);
  */
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted:', formData);
  }

  /*
    prevFormData is the previous state of the formData object. When you call setFormData, you can pass in a function that takes the previous state as an argument and returns the new state. This is useful when you need to update the state based on its previous value.
    In this code, we pass a function to setFormData that takes prevFormData as an argument. We then use the spread operator (...) to create a new object that contains all the properties of prevFormData. We then update the property specified by name with the new value.
    This approach ensures that we don’t accidentally overwrite any other properties of the formData object when updating a specific property.
  */
  function handleChange(event) {
    const { name, value } = event.target; //onchange event.target을 통해서 해당 name과 value를 가져온다.
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <div className='app-container'>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name:"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Email:"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Message:"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;