import React, { Component } from 'react'
import Tour from '../Tour';
import './tourlist.scss';
import {tourData} from '../../tourData.js';

export default class TourList extends Component { //we remove index and write TourList
    state={
        tours:tourData
    }
    removeTour = id =>{
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState(({
          tours:sortedTours
        }))
    }
  render() {
    //console.log(this.state.tours);
    const {tours} = this.state;
    return (
      <section className="tourList">
        {tours.map(
            tour => (
                <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
            )
        )}
      </section>
      
    )
  }
}
