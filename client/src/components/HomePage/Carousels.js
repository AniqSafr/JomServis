import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import "./Carousels.css"
import Banner4 from './assets/images/Banner4.jpg'
import Banner5 from './assets/images/Banner5.jpeg'
import Banner3 from './assets/images/Banner3.jpg'

import Test from './assets/images/unnamed4.jpg'
import Test1 from './assets/images/unnamed6.jpg'
import Test2 from './assets/images/unnamed7.jpg'



/* Backend nanti usya sini*/
function Carousels() {
    return ( 
        <div class='Banner'> 
            <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <Link to="/campaign">
                    <img className="d-block w-100" src={Banner4} alt="First Slide" />
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to="/campaign">
                    <img className="d-block w-100 " src={Banner5} alt="Second Slide" />
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to="/campaign">
                    <img className="d-block w-100" src={Banner3} alt="Third Slide" />
                </Link>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Carousels;