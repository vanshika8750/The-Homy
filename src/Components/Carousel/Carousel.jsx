import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg5 from '../../assets/bg5.jpg';
import bg6 from '../../assets/bg6.jpg';
import bg7 from '../../assets/bg7.jpg';
import bg8 from '../../assets/bg8.jpg';

import './Carousel.css'
function CarouselFadeExample() {
  return (
    <Carousel className='carousel-position' fade interval={4000} wrap>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg5}
          alt="fifth slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg6}
          alt="sixth slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg7}
          alt="seventh slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg8}
          alt="eighth slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

     
    </Carousel>
  );
}

export default CarouselFadeExample;
