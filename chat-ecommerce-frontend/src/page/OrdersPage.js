import React, { useEffect, useState } from 'react';
import "./OrdersPage.css";
import axios from '../axios';
import { useSelector } from 'react-redux';
import { Badge, Container } from 'react-bootstrap';

function OrdersPage() {
  const user = useSelector(state => state.user);
  const products = useSelector(state => state.products);
  const [orders, setOrders] = useState([]);
  const [loading,setLoading] = useState(false);
  const [orderToShow, setOrderToShow] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/user/${user._id}/orders`).then(({data}) => {
      setLoading(false);
      setOrders(data);

    }).catch((e) =>{
      setLoading(false);
      console.log(e);
    })
  }, [])

  return (
    <Container>
      <h1 className='text-center'>Your Orders</h1>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
          <th>#</th>
          <th>Status</th>
          <th>Total</th>
          <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) =>(
            <tr>
              <td>{order._id}</td>
              <td>
                <Badge bg={`${order.status == "proceessing" ? "warning" : "success"}`} text='white'>
                {order.status}
                </Badge>
                </td>
              <td>${oder.total}</td>
              <td></td>
            </tr>
          )
          )}
        </tbody>

      </Table>
    </Container>
  )
}

export default OrdersPage