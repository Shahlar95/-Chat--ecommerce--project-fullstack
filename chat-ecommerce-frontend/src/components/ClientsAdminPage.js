import React, { useEffect, useState } from 'react';
import axios from '../axios';
import Loading from '../components/Loading'


function usersAdminPage() {
    const [users, setUsers] = useState(null);
    const [loading , setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get('/users')
        .then(({data}) =>{
            setLoading(false);
            setUsers(data);
        }).catch ((e)=>{
            setLoading(false);
            console.log(e);
        })
    },[]);

    if(loading) return <Loading/>;
    if(users.length==0) return <h2 className='py2 text-center'>No users yet</h2>

  return (
    <Table responsive striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Client Name</th>
        <th>Items</th>
        <th>Client Total</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {users.map((users) => (
        <tr>
          <td>{users._id}</td>
          <td>{users.name}</td>
          <td>{users.email}</td>
          <td>{users.total}</td>
          <td>{users.adress}</td>
        </tr>
      ))}
    </tbody>
  </Table>
  )
}

export default usersAdminPage