import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import { TokenContext } from '../tokenContext'

const Login = () => {

  const { token, setToken } = useContext(TokenContext)

  const initialValues = { username: '', password: '' }
  const [formData, setFormData] = useState(initialValues)
  const [err, setError] = useState(false)

  const handleChange = e => {
    const key = e.target.name
    const value = e.target.value
    setFormData(prevValues => ({ ...prevValues, [key]: value }))
  }

  const connectionAttempt = e => {
    e.preventDefault()
    const result = window.btoa(`${formData.username}:${formData.password}`)
    const url = 'https://quintana.wazo.community/api/auth/0.1/token'
    axios.post(url, {
    }, {
      headers: {
        'Authorization': `Basic ${result}`
      }
    })
      .then(res => {
        // localStorage.setItem('X-Auth-Token', res.data.data.token)
        setToken(res.data.data.token)

      })
      .catch(err => {
        setFormData(initialValues)
        setError(true)
      })
  }

  return (
    <>
      <form onSubmit={connectionAttempt}>
        <label htmlFor='username'>Username :</label>
        <input id='username' name='username' type='text' value={formData.username} onChange={handleChange} />
        <label htmlFor='password'>Password :</label>
        <input id='password' name='password' type='password' value={formData.password} onChange={handleChange} />
        <input type='submit' value='SIGN IN' />
      </form>
      {err &&
        <div>
          Your username/password may be wrong... Please try again !
                </div>}
      {token !== '' && <Redirect to='home' />}
    </>
  );
}

export default Login;
