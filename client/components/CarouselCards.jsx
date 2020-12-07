import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
 
class CarouselCards extends Component {
  state = {
    items: [
      {id: 1, title: 'KererūGo'},
      {id: 2, title: 'TodoList'},
      {id: 3, title: 'ConnectR'},
      {id: 4, title: 'Blog'},
      {id: 5, title: 'Dashboard'}
    ]
  }
 
  render () {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map(item => <div className="portfolio-card" key={item.id}>{item.title}</div>)}
      </Carousel>
    )
  }
}

export default CarouselCards