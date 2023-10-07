import React, {useState} from 'react';
import {Col, Container, Form, Row, Button, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useSignupMutation} from '../services/appApi'
import './Signup.css';


const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
   const [signup, {error, isLoading, isError}] = useSignupMutation();


    function handleSignup(e){
        e.preventDefault();
        signup({name,email, password});
    }

  return (
   
<Container className='singup-container' >
   <Row>
        <Col className='sign__form--container'>
           
            <Form style ={{width: "100%" }} onSubmit= {handleSignup}>
                <h1>Create an  account</h1>
                {isError && <Alert variant='danger' >{error.data}</Alert>}
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Your name' value={name}  required onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email}  required onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} required onChange={(e)=> setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Button style ={{margin: "10px"}} type='submit' disabled={isLoading}
                    
                    >Create Account</Button>
                </Form.Group>
                <p>Don't haven an account? <Link style ={{color: "red" }} to='/login'>Login</Link>{''}
                </p>
            </Form>
            
            
        </Col>
        </Row>
   </Container>
    
  );
};

export default Signup