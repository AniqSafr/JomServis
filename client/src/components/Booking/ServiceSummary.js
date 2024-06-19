import React from 'react';
import { useLocation } from 'react-router-dom';
import './ServiceSummary.css';

const ServiceSummary = () => {
    const { state } = useLocation();
    const { selectedService, date, time, carDetails,currentUser } = state || {};

    return (
        <div className="service-summary">
            <h2>Make a Payment</h2>
            <div className="summary-container">
                <h3>Service Summary</h3>
                <div className="summary-details">
                    <div className="summary-item">
                        <span>Service Type:</span>
                        <span className="summary-value">{selectedService}</span>
                    </div>
                    <div className="summary-item">
                        <span>Service Appointment:</span>
                        <span className="summary-value">{date?.toLocaleDateString()} {time}</span>
                    </div>
                    <div className="summary-item">
                        <span>Service Center:</span>
                        <span className="summary-value">Autoville Cyberjaya</span>
                    </div>
                    <div className="summary-item">
                        <span>Car Details:</span>
                        <span className="summary-value">{carDetails.carPlateNo} {carDetails.carModel}</span>
                    </div>
                    <div className="summary-item">
                        <span>Name</span>
                        <span className="summary-value">{currentUser?.fname}</span>
                    </div>
                    <div className="summary-item">
                        <span>Email</span>
                        <span className="summary-value">{currentUser?.email}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSummary;
