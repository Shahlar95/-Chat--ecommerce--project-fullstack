import React from 'react'
import Form from 'react-bootstrap/Form';
import "./Contact.css";


function Contact() {
  return (
    <div className='container'>
      <h2>Contact Us</h2>
         <div className='container-content'>
         <div className='contact-text'>
            <p><i class="fa-solid fa-location-dot"></i> Adress: New York, NY 10012, US</p>
            <p><i class="fa-solid fa-at"></i> Email:info@example.com</p>
            <p><i class="fa-solid fa-phone"></i>  + 01 234 567 88</p>
            <p><i class="fa-solid fa-mobile-screen"></i> + 01 234 567 89</p>

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
       
        
    
    </div>
  )
}

export default Contact