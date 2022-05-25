import React, { useState, useEffect } from 'react'
import './App.css';

import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema'

import Form from './form'
import User from './user'

const initialUsers = [];
const initialDisable = false;
const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: false,
}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: '',
}

function App() {
  const [ users, setUsers ] = useState(initialUsers)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ disable, setDisable ] = useState(initialDisable)

  const postNewUser = (newUser) => {
    axios.post("https://reqres.in/api/users", newUser)
      .then(res=> {
        setUsers([ res.data, ...users]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(()=> setFormErrors({...formErrors, [name]: ""}))
      .catch(err=> setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value });
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms
    }
    postNewUser(newUser);
  }
  useEffect(()=> {
    schema.isValid(formValues).then(valid => setDisable(!valid))
  }, [formValues])


  return (
    <div className='container'>
      <header><h1>Add User App</h1></header>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disable={disable}
        errors={formErrors}
      />
      {users.map(user => {
        return (
          <User key={user.id} details={user}/>
        )
      })}
    </div>
    
  );
}

export default App;
