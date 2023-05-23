import React, {useState} from 'react';
import "./NewProduct.css";
import { useNavigate } from 'react-router-dom';
import { useCreateProductMutation } from '../services/appApi';
import {Col, Container, Form, Row, Button, Alert} from 'react-bootstrap';


const NewProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [images, setImages] = useState([]);
  const [imgToRemove, setImgToRemove] = useState(null)
  const navigate = useNavigate();
  const [createProduct, {isError, error, isLoading, isSuccess}] = useCreateProductMutation();

  return (
      <Container>
        <Row>
          <Col md={6} className='new-product__form--container'>
          <Form style ={{width: "100%"}}>
                <h1>Create a product</h1>
                {isSuccess && <Alert variant='success'> Product create with success</Alert>}
                {isError && <Alert variant="danger">{error.data}</Alert> }
                <Form.Group className='mb-3'>
                    <Form.Label>Product name</Form.Label>
                    <Form.Control type='text' placeholder='Enter product name' value={name}  required onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Product description</Form.Label>
                    <Form.Control as='textarea' placeholder='Enter product description' style={{height:"100px"}} value={description}  required onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label> Price{$}</Form.Label>
                    <Form.Control type='number' placeholder='Price($)'  value={price}  required onChange={(e) => setPrice(e.target.value)}/>
                </Form.Group>
                <Form.Group className='mb-3' onChange={(e)=>setCategroy(e.target.value)}>
                    <Form.Label>Category</Form.Label>
                    <Form.Select>
                      <option disabled selected>
                      -- Select One --
                      </option>
                      <option value = "technology"> technology </option>
                      <option value = "tablets"> tablets </option>
                      <option value = "phones"> phones </option>
                      <option value = "laptops"> laptops </option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Button type='submit' disabled={isLoading}>Login</Button>
                </Form.Group>
                <p>Don't haven an account? <Link to='/signup'>Create account</Link>{''}
                </p>
            </Form>
          </Col>
          <Col md={6} className='new-product__image--container'></Col>

        </Row>
      </Container>
  )
}

export default NewProduct