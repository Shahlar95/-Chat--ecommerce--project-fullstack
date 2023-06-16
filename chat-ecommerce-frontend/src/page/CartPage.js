import React from 'react';
import './CartPage.css';
import { useSelector } from 'react-redux';
import { Alert, Container, Row } from 'react-bootstrap';

function CartPage() {
    const user = useSelector((state)=> state.user);
    const products = useSelector((state) => state.products);
    const userCartObj = user.cart;
    let cart =products.filter((product)=> userCartObj[product._id] !=null);
  return (
    <Container style={{minHeight: "95vh"}} className='cart-container'>
        <Row>
          <Col md={7}>
            <h1 className='pt-2 h3'>Shopping Cart</h1>
            {cart.length == 0 ? (<Alert variant='info' >Shopping cart is empty. Add products to your cart</Alert>) 
            : (
                <div>Payment here </div>
            )}
            </Col>
            {cart.length > 0 && (
                <>
                <Table responsive='sm' className='cart-table'>

                </Table>
                </>
            )}
            <Col md={5}>
            </Col>
        </Row>
    </Container>
  )
}

export default CartPage