import React, { useContext, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { TokenContext } from '../tokenContext'
import axios from 'axios'

import CreateUser from './CreateUser'
import User from './User'

import './AdminContainer.css'

const AdminContainer = () => {

  const { token } = useContext(TokenContext)

  const usersUrl = 'https://quintana.wazo.community/api/auth/0.1/users'
  const auth = {
    headers: {
      'X-Auth-Token': token
    }
  }
  const [usersList, setUsersList] = useState([])

  const fetchUsers = () => {
    axios
      .get(usersUrl, auth)
      .then(res => {
        setUsersList(res.data.items)
      })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (token !== '') {

    return (
      <div className='AdminContainer'>
        <h1>* Wazo Users *</h1>
        <div className='ListContainer'>
          {
            usersList.map(user => <User key={user.uuid} user={user} />)
          }
        </div>
        <CreateUser
          auth={auth}
          usersUrl={usersUrl}
          usersList={usersList}
          setUsersList={setUsersList} />
      </div>
    )
  } else {
    return (<Redirect to='/' />)
  }

}

export default AdminContainer
