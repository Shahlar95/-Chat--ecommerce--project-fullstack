import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function OrdersAdminPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const products = useSelector(state=>state.products);
    const [orderToShow, setOrderToShow] = useState([]);
    const [show, setShow] = useState(false);
  return (
    <div>OrdersAdminPage</div>
  )
}

export default OrdersAdminPage