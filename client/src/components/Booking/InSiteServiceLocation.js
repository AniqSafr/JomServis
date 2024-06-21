import React, { useState } from "react";
import './InSiteServiceLocation.css';
import { useNavigate, useLocation } from "react-router-dom";

const InSiteServiceLocation = () => {
    const [state, setState] = useState('');
    const [center, setCenter] = useState('');
    const location = useLocation();
    const serviceType = new URLSearchParams(location.search).get("serviceType");

    const handleStateChange = (e) => {
        setState(e.target.value);
        setCenter(''); // Reset selected center when state changes
    };

    const handleCenterChange = (e) => {
        setCenter(e.target.value);
    };

    const navigate = useNavigate();

    const handleContinue = () => {
        if (center) {
            // Navigate to the next page with serviceType
            navigate('/service-options', {
                state: {
                    serviceType,
                    selectedServiceCenter: center
                }
            });
        } else {
            alert('Please select a service center.');
        }
    };

    return (
        <div className="service-center-location">
            <h2>Service Centers Location</h2>
            <p>Select One</p>
            <div className="dropdown-container">
                <select value={state} onChange={handleStateChange} className="dropdown">
                    <option value='' disabled>State</option>
                    <option value='selangor'>Selangor</option>
                    <option value='kuala_lumpur'>Kuala Lumpur</option>
                </select>
                <select value={center} onChange={handleCenterChange} className="dropdown" disabled={!state}>
                    <option value="" disabled>Service Center</option>
                    {state === 'selangor' && (
                        <>
                            <option value="sHyundai Ara Damansara (Sime Darby Auto Hyundai)">
                                Hyundai Ara Damansara (Sime Darby Auto Hyundai)
                            </option>
                            <option value="Sime Darby Auto Import Shah Alam">
                                Sime Darby Auto Import Shah Alam
                            </option>
                            <option value="Sime Darby Auto Selection, Balakong">
                                Sime Darby Auto Selection, Balakong
                            </option>
                        </>
                    )}
                    {state === 'kuala_lumpur' && (
                        <>
                            <option value="Sime Darby Motor Division Sdn. Bhd., Jalan Tun Razak">
                                Sime Darby Motor Division Sdn. Bhd., Jalan Tun Razak
                            </option>
                            <option value="Sime Darby Motor Division, Bukit Bintang">
                                Sime Darby Motor Division, Bukit Bintang
                            </option>
                            <option value="Sime Darby Auto Selection TREC">
                                Sime Darby Auto Selection TREC
                            </option>
                        </>
                    )}
                </select>
            </div>
            <button onClick={handleContinue} className="continue-button" disabled={!center}>Continue</button>
        </div>
    )
}

export default InSiteServiceLocation;
