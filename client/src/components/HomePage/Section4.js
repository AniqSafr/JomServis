import React from 'react'
import './Section4.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
function Section4() {
    return (
        <div className='body-4'>
            <Container>
                <Row>
                    <Col className='s4-txt'>
                        <h1 className="s4a">ARE YOU <span className="attracted">ATTRACTED</span></h1>
                        <h1 className="s4b">BY THE <span className="offering">OFFERINGS</span></h1>
                        <h1 className="s4c">WE PROVIDE?</h1>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <Row>
                            <Col>
                                <NavLink to="/booking">
                                    <button className="btn btn-outline-dark" type="button">Book Now!!</button>
                                </NavLink>
                            </Col>
                            <Col>
                                <NavLink to="/booking">
                                    <button class="btn btn-outline-dark" type="submit">Any Inquiries</button>
                                </NavLink>
                            </Col>
                        </Row>

                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Section4;