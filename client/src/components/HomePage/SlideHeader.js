/* tak guna yang ni*/


import React from 'react';
import "./SlideHeader.css"
import image from './assets/images/img_mountains_wide.jpg'
import image1 from './assets/images/img_nature_wide.jpg'
import image2 from './assets/images/img_snow_wide.jpg'
import image3 from './assets/images/Banner.avif'

function SlideHeader() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="image3" data-slide-to="0" class="active"></li>
                <li data-target="image" data-slide-to="1"></li>
                <li data-target="image1" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={image3} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={image1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={image2} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    );
}


export default SlideHeader;