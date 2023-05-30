import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import axios from '../axios';

function ProductPage() {
    const {id} = useParams();
    const user = useSelector(state=>state.user);
    const [product, setProduct] = useState(null);
    const [similar, setSimilar] = useState(null);
    const handleDragStart = (e) => e.preventDefault();
    useEffect(()=>{
        axios.get(`/products/${id}`).then(({data}) => {
            setProduct(data.product);
            setSimilar(data.similar);
        })
    }, [id])
    const images = product.pictures.map((picture) => <img className='product__carousel-image' src={picture.url} onDragStart={handleDragStart}/>) 

  return (
    <Container className='pt-4' style = {{position:'relative'}}>
        <Row>
            <Col lg={6}>
                <AliceCarousel mouseTracking items{images} controlsStrategy = 'alternative'
            </Col>
        </Row>
    </Container>

  )
}

export default ProductPage