import React, { useState, useEffect } from 'react';
import './Section4.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, useNavigate } from 'react-router-dom';
function Section4() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token); // Update authentication status based on token presence
    }, []);

    const handleNavClick = (path) => {
        if (!isAuthenticated) {
            navigate('/sign-in');
        } else {
            navigate(path);
        }
    };
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
                                <button className="btn btn-outline-dark" onClick={() => handleNavClick('/booking')}>Book Now!!</button>
                            </Col>
                            <Col>
                                <NavLink to="/">
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