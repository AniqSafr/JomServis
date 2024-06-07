import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../components/HomePage/assets/images/logo_motors.jpg';


export default function Footer() {
    const customTextStyle = {
        color: 'rgb(243, 70, 2)'
      };
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='company text-uppercase fw-bold mb-4' style={customTextStyle}>
                Sime Darby Motors
              </h6>
              <p>
              Sime Darby Motors is a major industry player in the Asia-Pacific region. Sime Darby Motors currently represents 30 brands, 
              ranging from luxury brands (such as BMW, McLaren and Rolls Royce) to various mass market brands like Ford, Peugeot and Hyundai, and trucking names like Hino and Mack.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Node
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Express
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  MongoDB
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/inquiries' className='text-reset'>
                  Inquiries
                </a>
              </p>
              <p>
                <a href='/campaign' className='text-reset'>
                  Campaign
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              Sime Darby Auto Bavaria Sdn Bhd
              </p>
              <p>
              Level 6  Block 1  Sime Darby Motors City
              </p>
              <p>
              Pusat Automotif Sime Darby
              </p>
              <p>
              No 6  Jalan PJU 1A/7  Ara Damansara
              </p>
              <p>
              47301 Petaling Jaya, Selangor, Malaysia  
              </p>
              <p>
              Email: motors.comm@simedarby.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://www.youtube.com/watch?v=TRSbA98O47Q&list=RDTRSbA98O47Q&start_radio=1&ab_channel=Pillow'>
          JA-DEVELOPER
        </a>
      </div>
    </MDBFooter>
  );
}