import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookAppointment.css';
import DropdownCalendar from './DropdownCalendar';
import Calendar from 'react-calendar';
import image1 from './assets/general-service.png';
import image2 from './assets/aircond-system.png';
import image3 from './assets/tyre-service.png';
import image4 from './assets/20-point-inspect.png';
import image5 from './assets/battery.png';
import image6 from './assets/brake-system.png';
import image7 from './assets/engine-repair.png';
import image8 from './assets/transmission-repair.png';
import image9 from './assets/brake-system.png';
import image10 from './assets/electrical-repair.png';
import image11 from './assets/exhaust-repair.png';
import image12 from './assets/suspension-repair.png';
import image13 from './assets/others-repair.png';
import image14 from './assets/others.png';




const serviceDetails = {
    'General Service': {
        image: image1,
        descriptions: ['Routine Maintenance', 'Oil & filter change', 'Full check']
    },
    'Aircond system': {
        image: image2,
        descriptions: ['Inspect & maintenance', 'Refrigent refill', 'Cleaning components'],
    },
    'Tyre Service': {
        image: image3,
        descriptions: ['Tyre rotation, balancing & alignment', 'Check pressure', 'Enhance safety'],
    },
    '20-point Inspection': {
        image: image4,
        descriptions: ['Check 20 critical components', 'Includes brakes, suspension and more', 'Identify potential issues'],
    },
    'Battery': {
        image: image5,
        descriptions: ['Test & inspection', 'Cleaning terminals', 'Ensure reliable starting'],
    },
    'Brake System': {
        image: image6,
        descriptions: ['Inspect & maintenance', 'Check brake fluid', 'Ensure optimal braking'],
    },
    'Others': {
        image: image14,
        descriptions: [],
    },
    'Engine Repair': {
        image: image7,
        descriptions: ['Diagnosis & repair', 'Fixing or replacing components', 'Restore engine performance'],
    },
    'Transmission Repair': {
        image: image8,
        descriptions: ['Address transmission system issues', 'Repairs or replacement', 'Ensure smooth & accurate gear shifting'],
    },
    'Brake Repair': {
        image: image9,
        descriptions: ['Fixing braking system problem', 'Address issues', 'Ensure vehicle stops safely'],
    },
    'Electrical Repair': {
        image: image10,
        descriptions: ['Troubleshooting & fixing', 'Battery, alternator, wiring repairs', 'Ensure all components function'],
    },
    'Exhaust Repair': {
        image: image11,
        descriptions: ['Repair exhaust system', 'Fix leaks, corrosion and other damage', 'Ensure efficient exhaust flow'],
    },
    'Suspension Repair': {
        image: image12,
        descriptions: ['Repair suspension system', 'Address suspension issues', 'Ensure a smooth & stable ride'],
    },
    'Other Repairs': {
        image: image13,
        descriptions: [],
    }    
};


const BookAppointment = () => {
    
    const { state } = useLocation();
    const { selectedServices, remarks } = state || {};
    const selectedService = selectedServices?.[0] || 'Service';
    const serviceDetail = { ...serviceDetails[selectedService] };
    if (selectedService === 'Others' || selectedService === 'Other Repairs') {
        serviceDetail.descriptions = [remarks || "No additional remarks"];
    }
    const [carDetails, setCarDetails] = useState({
        carPlateNo: '',
        carBrand: '',
        carModel: '',
        carYear: ''
    });
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const [value, onChange] = useState(new Date())

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleContinue = () => {
    };

    return (
        <div className="book-appointment">
            <h2>Book a Service Appointment</h2>
            <div className="appointment-section">
                <div className="service-type">
                    <h3>Service Type <span className="check-icon">✔️</span></h3>
                    <div className="service-details">
                        <div className="service-icon">
                            <img src={serviceDetail.image} alt={selectedService} />
                        </div>
                        <div className="service-info">
                            <h4>{selectedService}</h4>
                            <hr />
                            <ul>
                                {serviceDetail.descriptions?.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="car-details">
                    <h3>Car Details <span className="check-icon">✔️</span></h3>
                    <input type="text" name="carPlateNo" placeholder="Car Plate No." value={carDetails.carPlateNo} onChange={handleInputChange} />
                    <input type="text" name="carBrand" placeholder="Car Brand" value={carDetails.carBrand} onChange={handleInputChange} />
                    <input type="text" name="carModel" placeholder="Car Model" value={carDetails.carModel} onChange={handleInputChange} />
                    <input type="text" name="carYear" placeholder="Car Year" value={carDetails.carYear} onChange={handleInputChange} />
                </div>
                <div className="date-time">
                    <h3>Date & Time</h3>
                    <DropdownCalendar value={date} onChange={setDate} />
                    <div className="time-buttons">
                        {['0900', '1000', '1100', '1200', '1400', '1500', '1600', '1700'].map(slot => (
                            <button key={slot} className={time === slot ? 'selected' : ''} onClick={() => setTime(slot)}>{slot}</button>
                        ))}
                    </div>
                </div>
            </div>
            <button onClick={handleContinue} className="continue-button1">Continue</button>
        </div>
    );
};

export default BookAppointment;
