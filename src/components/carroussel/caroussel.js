import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselContainer = () => {
    return (
        <Carousel>
          
  <Carousel.Item>
    aa
    <img
      className="d-block w-100"
      //src={img1}
     src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      //src={img2}      
     src="holder.js/800x400?text=Second slide&bg=282c34"

      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      // src={img3}
     src="holder.js/800x400?text=Third slide&bg=20232a"

      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
export default CarouselContainer