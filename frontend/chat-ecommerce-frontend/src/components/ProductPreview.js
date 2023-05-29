import React from 'react'
import { CardImg, Card, Badge } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


const ProductPreview = ({_id, name, category, pictures}) => {
  return (
   <LinkContainer to= {`/product/${_id}`} style={{cursor:"pointer", width:"13rem", margin:"10px"}}>
   <Card style={{width:"20rem", margin:"10px"}}>
    <CardImg variant='top' className='product-preview-img'  src={pictures[0].url}/>
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Badge bg='warning' text='dark'>{category}</Badge>
    </Card.Body>  
   </Card>
   </LinkContainer>
  )
}

export default ProductPreview