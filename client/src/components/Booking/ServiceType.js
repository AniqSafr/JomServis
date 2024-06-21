import React from "react";
import "./ServiceType.css";
import image1 from "./assets/house-call.png";
import image2 from "./assets/in-site-service.png";
import { useNavigate } from "react-router-dom";

function ServiceType() {
  const navigate = useNavigate();

  const bookNow = (serviceType) => {
    if (serviceType === "in-site service") {
      navigate("/in-site-service-location?serviceType=in-site service");
    } else {
      navigate("/house-call-location?serviceType=house call");
    }
  };
  return (
    <div className="ServiceType">
      <div className="services">
        <div className="service">
          <div className="service-icon">
            <img src={image1} alt="House Call" />
          </div>
          <h4>House Call</h4>
          <p>Technicians come directly to you for all your service needs!</p>
          <button onClick={() => bookNow("house call")}>Book Now</button>
        </div>
        <div className="service">
          <div className="service-icon">
            <img src={image2} alt="In Site Service" />
          </div>
          <h4>In Site Service</h4>
          <p>Schedule your services at the works location for your vehicle.</p>
          <button onClick={() => bookNow("in-site service")}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default ServiceType;
