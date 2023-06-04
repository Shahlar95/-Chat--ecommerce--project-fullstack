import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Col, Container, Row,} from "react-bootstrap";
import { useParams } from 'react-router-dom';


function CategoryPage() {
    const category = useParams();
    const [Loading, setLoading] = useState(false);
    const [product,setProduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        setLoading(true);
        axios
        .get(`/product/category/${category}`)
        .then(({data}) =>{
            setLoading(false);
            setProduct(data);
        })
        .catch((e) =>{
            setLoading(false);
            console.log(e.message);

        }, [category]);
    })
  return (
    <div className='category-page-container'>
        <div className={''}></div>
        </div>
  )
}

export default CategoryPage