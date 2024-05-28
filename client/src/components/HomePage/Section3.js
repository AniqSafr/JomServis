import React from 'react'
import './Section3.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './assets/images/brand.jpg'

function Section3() {
    return (
        <div className='body-3'>
            <Container>
                <Row>
                    <Col>
                        <h1 class="h-4">ABOUT</h1>
                        <h1 class="h-5">SIME DARBY MOTORS</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='div-para'>
                            <p className='para'><b>
                                With over 40 years of experience, Sime Darby Motors is a major industry player in the Asia-Pacific region. Sime Darby Motors currently represents 30 brands, ranging from luxury brands (such as BMW, McLaren and Rolls Royce) to various mass market brands like Ford, Peugeot and Hyundai, and trucking names like Hino and Mack.
                            </b>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a class="brand-img">
                            <img  className="d-block-brand w-100" src={img} alt="" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Section3;