import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from "../Booking/MapView/Map";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "../Booking/MapView/MapConfiguration";

function Section2() {
    const { isLoaded } = useJsApiLoader({
        id: mapOptions.googleMapApiKey,
        googleMapsApiKey: mapOptions.googleMapApiKey,
      });

    return (
        <div className='body-2'>
            <Container>
                <Row>
                    <Col style={{ paddingTop: '20px' }}>
                        <h1 class="h-4">YOU CAN</h1>
                        <h1 class="h-5">FIND US AT</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ paddingTop: '20px' }}>
                        <Map isLoaded={isLoaded} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Section2;