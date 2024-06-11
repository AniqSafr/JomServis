// Home.js
import React from "react";
import Navbar from "../components/HomePage/Navbar";
import Inquiry from '../components/Inquiry/Inquiry.js';
import Footer from "../components/footer";

function Booking1() {
  return (
    <div className="Inquiries">
      <Navbar />
      <div className="Inquiry">
        <Inquiry/>
      </div>
      <Footer/>
    </div>
  );
}

export default Booking1;