import React, { useState } from 'react';
import './ServiceRepairOption.css';
import { useNavigate, useLocation } from 'react-router-dom';

const ServiceRepairOption = () => {
    const [activeTab, setActiveTab] = useState('service');
    const [selectedServices, setSelectedServices] = useState([]);
    const [remarks, setRemarks] = useState('');
    
    const location = useLocation();
    const { serviceType, selectedServiceCenter } = location.state || {};
    
    const services = ["General Service", "Aircond system", "Tyre Service", "20-point Inspection", "Battery", "Brake System", "Others"];
    const repairs = ["Engine Repair", "Transmission Repair", "Brake Repair", "Electrical Repair", "Exhaust Repair", "Suspension Repair", "Other Repairs"];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSelectedServices([]);
        setRemarks('');
    };

    const handleServiceToggle = (service) => {
        setSelectedServices((prev) =>
            prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
        );
    };

    const handleRemarksChange = (e) => {
        setRemarks(e.target.value);
    };

    const navigate = useNavigate();
    const handleContinue = () => {
        if (selectedServices.length === 0) {
            alert('Please select at least one service or repair option.');
            return;
        }
        navigate('/book-appointment', { state: { selectedServices, activeTab, remarks, serviceType, selectedServiceCenter } });
    };

    return (
        <div className="service-options">
            <div className="tab-container">
                <button className={`tab ${activeTab === 'service' ? 'active' : ''}`} onClick={() => handleTabChange('service')}>Service</button>
                <button className={`tab ${activeTab === 'repair' ? 'active' : ''}`} onClick={() => handleTabChange('repair')}>Repair</button>
            </div>
            <h2>{activeTab === 'service' ? 'Service For...' : 'Repair For...'}</h2>
            <p>You can select more than one</p>
            <div className="service-buttons">
                {(activeTab === 'service' ? services : repairs).map((option) => (
                    <button
                        key={option}
                        className={`service-button ${selectedServices.includes(option) ? 'selected' : ''}`}
                        onClick={() => handleServiceToggle(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="remarks">
                <label>Remarks (Optional)</label>
                <textarea value={remarks} onChange={handleRemarksChange} />
            </div>
            <button onClick={handleContinue} className="continue-button">Continue</button>
        </div>
    );
};

export default ServiceRepairOption;
