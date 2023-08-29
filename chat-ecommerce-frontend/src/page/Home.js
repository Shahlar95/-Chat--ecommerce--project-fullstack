import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import categories from '../categories';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from '../features/productSlice';
import ProductPreview from '../components/ProductPreview';
import axios from '../axios';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products ? products.slice(0, 8) : [];

  useEffect(() => {
    axios.get('/products').then(({ data }) => dispatch(updateProducts(data)));
  }, []);

  return (
    <div>
       <img
        src="/image1.png"
        alt="img"
        className="home-banner"
      />
      <div className="featured-products-container mt-4">
        <h2>Last products</h2>
        {/* last products here */}
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview key={product.id} {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/all"
            style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}
          >
            See more &gt;&gt;
          </Link>
        </div>
      </div>
      {/* sale banner */}
      <div className="sale__banner--container mt-4">
        <img  id='image2' src="/image2.png" alt="img" />
      </div>
      <div className="recent-products-container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer key={category.name} to={`/category/${category.name.toLowerCase()}`}>
              <Col key={category.name} md={4}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${category.img})`,
                    gap: '10px',
                    marginBottom:"30px"
                  }}
                  className="category-tile"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
