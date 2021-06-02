import React from 'react'

import './User.css'

const User = ({ user: { firstname, lastname, purpose, emails } }) => {
  return (
    <div className='User'>
      <p id='user-name'>{firstname} {lastname}</p>
      <div className='EmailsContainer'>
        {
          emails.map(email => <p key={email.uuid}>{email.address}</p>)
        }
      </div>
      <p id='user-purpose'>Profile: {purpose}</p>
      <div className='UserActions'>
        <button id='user-edit'>EDIT</button>
        <button id='user-delete'>DELETE</button>
      </div>
    </div>
  )
}

export default User
