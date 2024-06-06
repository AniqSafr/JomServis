import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import image from './assets/images/logo-removebg-preview.png';
import logo from './assets/images/nav-logo.jpg';
import './Navbar.css';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyNavbar() {
    const [currentUser, setCurrentUser] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    }

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch("http://localhost:5000/currentUser", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.status === "ok") {
                    setCurrentUser(data.data);
                }
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        };

        fetchCurrentUser();
    }, []);


    return (
        <div className='Navbar'>
            <Navbar expand="lg" className="navbar-light bg-light" expanded={expanded}>
                <Navbar.Brand as={NavLink} to="/">
                    <img src={logo} width="60" height="50" className="d-inline-block align-top" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" onClick={handleToggle} />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="nav-item">
                        <Nav.Link as={NavLink} to="/" exact activeClassName="active" className='nav-obj'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/booking" activeClassName="active"className='nav-obj'>Booking</Nav.Link>
                        <Nav.Link as={NavLink} to="/campaign" activeClassName="active"className='nav-obj'>Campaign</Nav.Link>
                        <Nav.Link as={NavLink} to="/inquiries" activeClassName="active"className='nav-obj'>Inquiries</Nav.Link>
                        <Nav.Link as={NavLink} to="/feedback" activeClassName="active"className='nav-obj'>Feedback</Nav.Link>
                    </Nav>
                    <div className="my-2 my-lg-0 mr-5">
                        {currentUser ? (
                            <NavLink to="/profile" className="btn btn-outline-light mr-5">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        style={{ color: "black", width: "1em", marginRight: "0.5em" }}
                                    />
                                    {currentUser.fname}
                                </div>
                            </NavLink>
                        ) : (
                            <div className='pr-10'>
                                <NavLink to="/sign-in" className="btn btn-secondary my-2 my-sm-0">Login</NavLink>
                            </div>
                        )}
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default MyNavbar;
