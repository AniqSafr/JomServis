// Home.js
import React from "react";
import Navbar from "../components/HomePage/Navbar";
import CService from "../components/Booking/CardOption";

function Booking1() {
  return (
    <div className="Booking1">
      <Navbar />
      <div className="CService">
        <CService />
      </div>
    </div>
  );
}

export default Booking1;
