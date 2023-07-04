import React, { useEffect, useState } from 'react';
import axios from '../axios';
import Loading from '../components/Loading'


function ClientsAdminPage() {
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
        <th>clientss Total</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {clientss.map((clients) => (
        <tr>
          <td>{clients._id}</td>
          <td>{clients.owner?.name}</td>
          <td>{clients.count}</td>
          <td>{clients.total}</td>
          <td>{clients.adress}</td>

          <td>
            {clients.status === "processing" ? (
              <Button
                size="sm"
                onClick={() => markShipped(clients._id, clients.owner?._id)}
              >
                Mark as Shipped
              </Button>
            ) : (
              <Badge bg="success">Shipped</Badge>
            )}
          </td>
          <td>
              <span style={{cursor:"pointer"}} onClick={()=> showclients(clients.products)} >
                  View clients <i className="fa fa-eye"></i>
              </span>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
  )
}

export default ClientsAdminPage