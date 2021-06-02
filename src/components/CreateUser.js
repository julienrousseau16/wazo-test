import React, { useState } from 'react'

const CreateUser = ({ token }) => {

  const initialValues = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    purpose: ''
  }
  const [formData, setFormData] = useState(initialValues)
  const { username, firstname, lastname, email, purpose } = formData

  const handleChange = e => {
    const key = e.target.name
    const value = e.target.value
    setFormData(prevValues => ({ ...prevValues, [key]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='CreateUser'>
      <div className='CreateUserContainer'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input required name='username' type='text' value={username} onChange={handleChange} />
          <label htmlFor='firstname'>Firstname</label>
          <input required name='firstname' type='text' value={firstname} onChange={handleChange} />
          <label htmlFor='lastname'>Lastname</label>
          <input required name='lastname' type='text' value={lastname} onChange={handleChange} />
          <label htmlFor='email'>Email</label>
          <input required name='email' type='email' value={email} onChange={handleChange} />
          <label htmlFor='purpose'>Purpose</label>
          <input required name='purpose' type='text' value={purpose} onChange={handleChange} />
          <input type='submit' value='SAVE' />
        </form>
      </div>
    </div>
  )
}

export default CreateUser
