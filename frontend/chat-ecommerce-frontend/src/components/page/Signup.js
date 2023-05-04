import React, {useState} from 'react';
import {Col, Container, Form, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  return (
    <Container>
    <Row>
        <Col md={6} className='login_form_container'>
            <Form style ={{width: "100%"}}>
                <h1>Create an  account</h1>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email}  required onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} required onChange={(e)=> setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Button type='submit'>Login</Button>
                </Form.Group>
                <p>Don't haven an account? <Link to='/signup'>Create account</Link>{''}
                </p>
            </Form>
        </Col>
        <Col md={6} className='signup_image_container'></Col>

    </Row>
   </Container>
  );
};

export default Signup