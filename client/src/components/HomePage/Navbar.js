import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from './assets/images/logo-removebg-preview.png';
import './Navbar.css';
import { faUser, faSearch, faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    const [currentUser, setCurrentUser] = useState(null);

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

    const handleLogout = () => {
        window.localStorage.clear();
        window.location.href = "/sign-in";
    };

    return (
        <div className='Navbar'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
            <img src={image} width="40" height="30" className="d-inline-block align-top" alt="" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/booking" className="nav-link">Booking</Link>
                </li>
                <li className="nav-item">
                    <Link to="/campaign" className="nav-link">Campaign</Link>
                </li>
                <li className="nav-item">
                    <Link to="/inquiries" className="nav-link">Inquiries</Link>
                </li>
                <li className="nav-item">
                    <Link to="/feedback" className="nav-link">Feedback</Link>
                </li>
            </ul>
        </div>
        <div className="my-2 my-lg-0 mr-5 ">
            {currentUser ? (
                <Link to="/userDetails" className="btn btn-outline-light mr-5">
                    <div>
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{ color: "black", width: "1em", marginRight: "0.5em" }}
                        />
                        {currentUser.fname}
                    </div>
                </Link>
            ) : (
                <div className='pr-10'>
                    <Link to="/sign-in" className="btn btn-secondary my-2 my-sm-0">Login</Link>
                </div>
                
            )}
        </div>
    </nav>
</div>


    );
}

export default Navbar;
