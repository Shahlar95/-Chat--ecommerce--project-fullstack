import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';

export default function Footer() {
  return (
    <MDBFooter id='footer' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span id='footer-text'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href=''  className='me-4 text-reset'>
            <MDBIcon id='footer-text' color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon id='footer-text' color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon id='footer-text' color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon id='footer-text' color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon id='footer-text' color='secondary' fab icon='linkedin' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 id='footer-text' className='text-uppercase fw-bold mb-4'>
                <MDBIcon id='footer-text' color='secondary' icon='gem' className='me-3' />
                E-commerce
              </h6>
              <p id='footer-text'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 id='footer-text' className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
               
              </p>
              <p id='footer-text'>
                <a href='/orders' className='text-reset'>
                  Orders
                </a>
              </p>
              <p id='footer-text'>
                <a href='/' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 id='footer-text' className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p id='footer-text'>
                <MDBIcon id='footer-text' color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p id='footer-text'>
                <MDBIcon id='footer-text' color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p id='footer-text'>
                <MDBIcon id='footer-text' color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p id='footer-text'>
                <MDBIcon id='footer-text' color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div  id='footer-text' className='text-center p-4'>
        © 2023 Copyright
      </div>
    </MDBFooter>
  );
}