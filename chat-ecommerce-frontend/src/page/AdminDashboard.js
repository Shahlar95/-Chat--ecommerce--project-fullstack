import React from 'react';
import axios from '../axios';
import './AdminDashboard.css';
import { Container,Nav,Tab, Col, Row } from 'react-bootstrap';

function AdminDashboard() {
  return (
    <Container>
        <Tab.Container defaultAktivKey = "products">
            <Row>
                <Col sm={3}>
                <Nav variant = 'pills' className='flex-column'>
                    <Nav.Item>
                    <Nav.Link eventKey="products">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="orders">Orders</Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                    <Nav.Link eventKey="clients">Clients</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col  sm={9}>
                    <Tab.Content eventKey='products'>
                        <DashboardProducts/>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </Container>
  )
}

export default AdminDashboard