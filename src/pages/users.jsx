import React from 'react'
import Table from '../components/table'

const Users = () => {
  const headers = ['Name', 'Email', 'Address', 'Card number', 'Account number', 'Actions']; 
  return (
    <div>
      <h1>User List</h1>
      <Table headers={headers}/>
    </div>
  )
}

export default Users