import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const UsersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='firstname' />
        <TextField source='lastname' />
        <TextField source='email' />
        <TextField source='extension' />
        <TextField source='code' />
        <EditButton basePath='' />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}

export default UsersList
