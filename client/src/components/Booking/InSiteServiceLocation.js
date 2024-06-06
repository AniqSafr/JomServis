import React, { useState } from "react";
import './InSiteServiceLocation.css';
import { useNavigate } from "react-router-dom";

const InSiteServiceLocation = () => {
    const [state, setState] = useState('');
    const [center, setCenter] = useState('');

    const handleStateChange = (e) => {
        setState(e.target.value);
    }

    const handleCenterChange = (e) => {
        setCenter(e.target.value);
    };

    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/service-options');
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
                            <option value="sd_ara_damansara">
                                Hyundai Ara Damansara(Sime Darby Auto Hyundai)
                            </option>
                            <option value="sd_shah_alam">
                                Sime Darby Auto Import Shah Alam
                            </option>
                            <option value="sd_balakong">
                                Sime Darby Auto Selection, Balakong
                            </option>
                        </>
                    )}
                    {state === 'kuala_lumpur' && (
                        <>
                            <option value="sd_tun_razak">
                                Sime Darby Motor Division Sdn. Bhd., Jalan Tun Razak
                            </option>
                            <option value="sd_bukit_bintang">
                                Sime Darby Motor Division, Bukit Bintang
                            </option>
                            <option value="sd_trec">
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