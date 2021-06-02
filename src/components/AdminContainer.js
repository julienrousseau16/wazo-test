import React, { useContext, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { TokenContext } from '../tokenContext'
import axios from 'axios'

// import { Admin, Resource } from 'react-admin'
// import restProvider from 'ra-data-simple-rest'

// import UsersList from './UsersList'

import CreateUser from './CreateUser'
import User from './User'

const AdminContainer = () => {

  const { token } = useContext(TokenContext)
  const auth = {
    headers: {
      'X-Auth-Token': token
    }
  }
  const [usersList, setUsersList] = useState([])

  const fetchData = () => {
    const url = 'https://quintana.wazo.community/api/auth/0.1/users'
    axios
      .get(url, auth)
      .then(res => {
        // console.log(res.data.items[0])
        setUsersList(res.data.items)
      })
  }

  // const dataProvider = () => {
  //   axios.getList('https://quintana.wazo.community/api/auth/0.1/users', auth)
  //     .then(res => console.log(res.data))
  // }

  useEffect(() => {
    fetchData()
  })

  if (token !== '') {

    return (
      <div>
        <h2>List of Users</h2>
        {/* <Admin dataProvider={dataProvider}>
          <Resource name='users' list={UsersList} />
        </Admin>
        <button onClick={fetchData}>FETCH</button> */}

        {
          usersList.map(user => <User key={user.uuid} user={user} />)
        }
        <CreateUser token={token} />
      </div>
    )
  } else {
    return (<Redirect to='/' />)
  }

}

export default AdminContainer
