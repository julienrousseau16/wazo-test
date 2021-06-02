import React, { useState } from 'react'
import axios from 'axios'

const CreateUser = ({ auth, usersUrl, usersList, setUsersList }) => {

  const initialValues = {
    email_address: '',
    enabled: true,
    firstname: '',
    lastname: '',
    password: '',
    purpose: '',
    username: ''
  }
  const [formData, setFormData] = useState(initialValues)
  const { email_address, firstname, lastname, password, purpose, username } = formData

  const handleChange = e => {
    const key = e.target.name
    const value = e.target.value
    setFormData(prevValues => ({ ...prevValues, [key]: value }))
  }

  const createUser = e => {
    e.preventDefault()
    axios
      .post(usersUrl, formData, auth)
      .then(res => {
        console.log(res.data)
        const newUser = [...usersList]
        newUser.push(res.data)
        setUsersList(newUser)
        setFormData(initialValues)
      })
  }

  return (
    <div className='CreateUser'>
      <div className='CreateUserContainer'>
        <form onSubmit={createUser}>
          <label htmlFor='username'>Username</label>
          <input required name='username' type='text' value={username} onChange={handleChange} />
          <label htmlFor='password'>Password</label>
          <input required name='password' type='password' value={password} onChange={handleChange} />
          <label htmlFor='firstname'>Firstname</label>
          <input required name='firstname' type='text' value={firstname} onChange={handleChange} />
          <label htmlFor='lastname'>Lastname</label>
          <input required name='lastname' type='text' value={lastname} onChange={handleChange} />
          <label htmlFor='email_address'>Email</label>
          <input required name='email_address' type='email' value={email_address} onChange={handleChange} />
          <label htmlFor='purpose'>Purpose</label>
          <input required name='purpose' type='text' value={purpose} onChange={handleChange} />
          <input type='submit' value='SAVE' />
        </form>
      </div>
    </div>
  )
}

export default CreateUser
