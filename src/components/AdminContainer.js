import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { TokenContext } from '../tokenContext'
// import { Admin, Resource } from 'react-admin'
// import restProvider from 'ra-data-simple-rest'

// import UsersList from './UsersList'


const AdminContainer = () => {

  const { token } = useContext(TokenContext)

  if (token !== '') {
    return (
      <div>
        <h2>Best is yet to come...</h2>
        {/* <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource name='users' list={UsersList} />
      </Admin> */}
      </div>
    )
  } else {
    return (<Redirect to='/' />)
  }

}

export default AdminContainer
