import React , { Component } from 'react';
import { Carousel } from 'react-bootstrap'

class CarouselComponent extends Component {
  render()
  {
    return (
      <Carousel style={{margin:0}}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("../assets/burger.jpeg")}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 style={{color :"#2f3542" , fontFamily: "sans-serif" , fontweight: "bold"}} >Burger</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("../assets/pizza.jpg")}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 style={{color :"#2f3542" , fontFamily: "sans-serif" , fontweight: "bold"}}>Pizza</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("../assets/salad.jpg")}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 style={{color :"#2f3542" , fontFamily: "sans-serif" , fontweight: "bold"}}>Nutritional salad</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    );
  }
}

export default CarouselComponent;
