import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import PrflImg from "../HomePage/assets/images/profile-img.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Dashboard() {
    const [newCar, setNewCar] = useState(false);
    const [show, setShow] = useState(false);
    //add car 
    const newCarClose = () => setNewCar(false);
    const newCarShow = () => setNewCar(true);

    //edit profile
    const editProfileClose = () => setShow(false);
    const editProfileShow = () => setShow(true);


    //user profile
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

    //handle logout
    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./sign-in";
      };

    return (
        <>
            <div className="gradient-custom-2" style={{ backgroundColor: '#ffff' }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol lg="14" xl="14">
                            <MDBCard>
                                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                    <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                        <MDBCardImage src={PrflImg}
                                            alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />

                                    </div>
                                    <div className="ms-3" style={{ marginTop: '130px' }}>
                                        <MDBTypography tag="h5">
                                            <div>
                                                {currentUser ? currentUser.fname : "Loading..."}
                                                {currentUser ? currentUser.lname : "Loading..."}
                                            </div>
                                        </MDBTypography>
                                        <MDBCardText>Malaysia</MDBCardText>
                                    </div>
                                </div>
                                <div className="p-4 text-black" >
                                    <div className="d-flex justify-content-end text-center py-1">
                                        <div>
                                            <DropdownButton
                                                as={ButtonGroup}
                                                id="dropdown"
                                                className="custom-dropdown"
                                                variant="dark"
                                                title="Available Car"
                                            >
                                                <Dropdown.Item disabled>Ford</Dropdown.Item>
                                                <Dropdown.Item disabled>Jaguar</Dropdown.Item>
                                                <Dropdown.Item disabled> BMW </Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item active onClick={newCarShow} className='btn-secondary'>Add car</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                        <div className="px-3">
                                            <DropdownButton
                                                as={ButtonGroup}
                                                id="dropdown"
                                                className="custom-dropdown"
                                                variant="dark"
                                                title="Setting"
                                            >
                                                <Dropdown.Item onClick={editProfileShow} >Edit Profile</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                    </div>
                                </div>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>

            <Modal show={newCar} onHide={newCarClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Car Plate No.</Form.Label>
                            <Form.Control
                                type="Car Plate No"
                                placeholder="Plate No"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Car Brand</Form.Label>
                            <Form.Control type="Car Brand" placeholder="Car Brand" />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Car Model</Form.Label>
                            <Form.Control type="Car Model" placeholder="Car Model" />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Car Year</Form.Label>
                            <Form.Control type="Car Year" placeholder="Car Year" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={newCarClose}>
                        Save Changes
                    </Button>
                    <Button variant="danger" onClick={newCarClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show} onHide={editProfileClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="Name" placeholder="Name" autoFocus />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="E-mail" placeholder="E-mail" />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="Phone Number" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="Address" placeholder="Address" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={editProfileClose}>
                        Save Changes
                    </Button>
                    <Button variant="danger" onClick={editProfileClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Dashboard;
