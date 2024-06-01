import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "./Card.css";
import image1 from "../HomePage/assets/images/Riang_Raya.jpg";
import image2 from "../HomePage/assets/images/Promotion.png";
import image3 from "../HomePage/assets/images/Year_End.jpg";

// Modal component
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Campaign
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Details Event</h4>
        <p>
          {props.content}
        </p>
        <img src={props.imgSrc} alt="Modal content" style={{ width: '100%' }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

// Card component
function CardCampaign() {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({
    imgSrc: '',
    content: '',
  });

  const handleCardClick = (imgSrc, content) => {
    setModalContent({ imgSrc, content });
    setModalShow(true);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="p-0.5">
            <Card onClick={() => handleCardClick(image1, 'Some quick example text to build on the card title and make up the bulk of the card\'s content.')}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Text>
                <b>Riang Raya Offers</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col className="p-0.5">
          <Card onClick={() => handleCardClick(image2, 
    `Event: Auspicious Promotions at Sime Darby Motors City
    Date: 23 - 25 February 2024
    Location: Ara Damansara
    Participating Brands:
    - Auto Selection (Your Trusted Used Car Dealer)
    - BMW
    - BYD
    - Ford
    - Hyundai
    - Jaguar
    - Land Rover
    - MINI
    - Volvo
    The event is hosted by Sime Darby Motors, and it features a festive theme with decorative elements such as lanterns and dragons, suggesting a celebration in conjunction with a cultural or festive period.`)}>

              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Text>
                <b>Apicious Promotion</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col className="p-0.5">
            <Card onClick={() => handleCardClick(image3, 'Some quick example text to build on the card title and make up the bulk of the card\'s content.')}>
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Text>
                  <b>Year-End Extravaganza</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          
        
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imgSrc={modalContent.imgSrc}
        content={modalContent.content}
      />
    </>
  );
}

export default CardCampaign;
