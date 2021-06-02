import React from 'react'

const User = ({ user: { firstname, lastname, purpose, emails } }) => {
  return (
    <div className='User'>
      <p>{firstname} {lastname}</p>
      <p>{purpose}</p>
      {emails.map(email => <p key={email.uuid}>{email.address}</p>)}
      <button>EDIT</button>
      <button>DELETE</button>
    </div>
  )
}

export default User
