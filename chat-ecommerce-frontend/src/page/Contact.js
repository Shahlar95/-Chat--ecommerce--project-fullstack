import React from 'react'
import Form from 'react-bootstrap/Form';
import "./Contact.css";


function Contact() {
  return (
    <div className='container'>
         
        <div className='contact-text'>
        <h2>Contact Us</h2>
            <p>Adress: New York, NY 10012, US</p>
            <p>Email:info@example.com</p>
            <p> + 01 234 567 88</p>
            <p>+ 01 234 567 89</p>

        </div>
        <div><Form className='form-contact'>
    <Form.Group id='form-group' className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name, Surname</Form.Label>
        <Form.Control type="name" placeholder="John Doe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="+994" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form></div>
        
    
    </div>
  )
}

export default Contact