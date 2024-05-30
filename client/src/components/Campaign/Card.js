import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "./Card.css";
import image from "../HomePage/assets/images/img_mountains_wide.jpg";
import image1 from "../HomePage/assets/images/sime_darby.jpg";
import image2 from "../HomePage/assets/images/DreamRide.jpg";
import image3 from "../HomePage/assets/images/Grand_Finale.jpg";

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
        <h4>Upcoming Event</h4>
        <p>
          {props.content}
        </p>
        <img src={props.imgSrc} alt="Modal content" style={{ width: '100%' }} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
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
            <Card onClick={() => handleCardClick(image3, 'Some quick example text to build on the card title and make up the bulk of the card\'s content.')}>
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col className="p-0.5">
            <Card onClick={() => handleCardClick(image1, 'Some quick example text to build on the card title and make up the bulk of the card\'s content.')}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col className="p-0.5">
            <Card onClick={() => handleCardClick(image2, 'Some quick example text to build on the card title and make up the bulk of the card\'s content.')}>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
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
