import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousels.css"
import Banner from './assets/images/Banner.avif'
import Banner1 from './assets/images/Banner2.png'


/* Backend nanti usya sini*/
function Carousels() {
    return ( 
        <div class='Banner'> 
            <Carousel data-bs-theme="dark"> 
                <Carousel.Item>  
                    <img className="d-block w-100" src={Banner} alt="second Slide"/> 
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Banner1} alt="second Slide"/> 
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carousels;