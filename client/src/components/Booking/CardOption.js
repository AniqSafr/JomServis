import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import houseCallImage from "./house_call.png";
import inSiteImage from "./in_site.png";
import "./CService.css"; // Import the CSS file

function CService() {
  return (
    <div className="Booking"> 
      <div classname="section-booking">
        <h1>
          Keep Your Journey Smooth  <br />
          Drive with Confidence  <br />
          Transparent Pricing
        </h1>
      </div>
      <div className="card-container">
        <Card className="custom-card">
          <Card.Body>
            <Card.Title>House Call</Card.Title>
            <Card.Text>
              Technicians come directly to you for all your car service needs!
              With just a few clicks, our professional driver will arrive at
              your specified location.
            </Card.Text>
            <Card.Img variant="top" src={houseCallImage} />
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <Card.Title>In Site Service</Card.Title>
           <Card.Text>
              Choose your own preferred service location! Schedule your service
              at a time that works best for you with our flexible options.
            </Card.Text>
            <Card.Img variant="top" src={inSiteImage} />
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
} 

export default CService;
