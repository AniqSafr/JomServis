import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import './Section1.css'
import image1 from './assets/images/service-icon.jpg'
import image2 from './assets/images/repair-icon.jpg'
import image3 from './assets/images/mobility-icon.jpg'

function Section1() {
    return (
        <div className="body">
            <Container>
                <Row>
                    <Col>
                        <h1 className="h-1" >DISCOVER THE</h1>
                        <h1 className="h-1" >EXCELLENCE</h1>
                        <h1 className="h-2" >OF OUR</h1>
                        <h1 className="h-1">SERVICE</h1>
                    </Col>
                    <Col>
                        <Row>
                            <Col className="d-flex justify-content-center align-items-center">
                                <a class="service-icon" >
                                    <img src={image1} alt="" />
                                </a>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center">
                                <a class="repair-icon">
                                    <img src={image2} alt="" />
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center align-items-center">
                                <a class="mobility-icon">
                                    <img src={image3} alt="" />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Section1;