import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MDBCardBody } from 'mdb-react-ui-kit'; // Adjust the import as per your MDBReactKit setup
import Table from 'react-bootstrap/Table';
import { UserContext } from '../UserContext'; // Adjust the path as per your context location
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you're using FontAwesome
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function TableFeedback() {
    const { currentUser } = useContext(UserContext);
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem("token");
                const response = await axios.get(`http://localhost:5000/getAllAppointmentsWithFeedback`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    params: {
                        search: currentUser ? currentUser.email : '' // Pass current user email as search param
                    }
                });

                const data = response.data;
                if (data.status === "ok") {
                    setAppointments(data.data);
                    setLoading(false);
                } else {
                    setError(data.message);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching appointments:", error);
                setError(error.message);
                setLoading(false);
            }
        };

        if (currentUser) {
            fetchAppointments();
        }
    }, [currentUser]);

    // Function to handle click on NoFeedback button
    const handleNoFeedbackClick = (bookingId) => {
        // Navigate to feedback page with booking ID
        navigate(`/rate?bookingId=${bookingId}`);
    };


    return (
        <div className="ms-3" style={{ marginRight: '30px', marginLeft: '40px' }}>
            <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                    <h1 className="lead fw-normal mb-1">History</h1>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : appointments.length === 0 ? (
                            <p>No appointments found</p>
                        ) : (
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Selected Service</th>
                                        <th>Date</th>
                                        <th>Car Details</th>
                                        <th>Feedback</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map((appointment) => (
                                        <tr key={appointment._id}>
                                            <td>{appointment._id}</td>
                                            <td>{appointment.selectedService}</td>
                                            <td>{new Date(appointment.date).toLocaleDateString()}</td>
                                            <td>{`${appointment.carDetails.carBrand} ${appointment.carDetails.carModel} ${appointment.carDetails.carYear} ${appointment.carDetails.carPlateNo}`}</td>
                                            <td>
                                                {appointment.feedback ? (
                                                    <span>Current Rating: {appointment.feedback.rating}</span>
                                                ) : (
                                                    <button className="btn btn-secondary" onClick={() => handleNoFeedbackClick(appointment._id)}>
                                                        Write Feedback
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )}
                    </div>
                </div>
            </MDBCardBody>
        </div>
    );
}

export default TableFeedback;
