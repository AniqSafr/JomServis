// Home.js
import React from "react";
import Navbar from "../components/HomePage/Navbar";
import ServiceType from '../components/Booking/ServiceType';
import Section1 from "../components/Booking/Section1";

function Booking1() {
  return (
    <div className="Booking1">
      <Navbar />
      <div className="Section1">
        <Section1 />
      </div>
      <div className="ServiceType">
        <ServiceType />
      </div>
    </div>
  );
}

export default Booking1;
