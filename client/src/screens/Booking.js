// Home.js
import React from "react";
import Navbar from "../components/HomePage/Navbar";
import ServiceType from '../components/Booking/ServiceType';

function Booking1() {
  return (
    <div className="Booking1">
      <Navbar />
      <div className="ServiceType">
        <ServiceType />
      </div>
    </div>
  );
}

export default Booking1;
