import React, { useEffect, useState } from 'react';
import Table from '../components/table';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const handleDelete = (idUser) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this account?");
    if (confirmDelete) {
      fetch(`http://localhost:3000/user/${idUser}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) {
          setUsers(users.filter(user => user.idUser !== idUser));
        } else {
          console.error('Error deleting user:', response);
        }
      })
      .catch(error => console.error('Error deleting user:', error));
    }
  };

  const headers = ['Name', 'Email', 'ID User', 'Actions'];

  return (
    <div>
      <h1>User List</h1>
      <Table headers={headers} users={users} onDelete={handleDelete} />
    </div>
  );
}

export default Users;
