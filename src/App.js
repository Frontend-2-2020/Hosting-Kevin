import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

export default class App extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="https://images.unsplash.com/photo-1548163239-47b907dee9f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80" alt=""/>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1522136846210-1f22a26c02c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt=""/>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1561962535-8671711230cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt=""/>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1516192936532-a572a51fc1b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80" alt=""/>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1456534231849-7d5fcd82d77b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2088&q=80" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}
