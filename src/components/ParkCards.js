import React from 'react';
import PropTypes from 'prop-types';
import Park from './Park';
import SideBar from './SideBar';

export default class ParkCards extends React.Component {

  static displayName = 'ParkCards';

  constructor(props){
    super(props);
    this.state = {
        getPark: [],
        isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://data.seattle.gov/api/views/j9km-ydkc/rows.json')
    .then(response => response.json())
    .then(json => this.setState({
      getPark: json.data,
      isLoading: false
    }));
  }

  filterFeature(rows, feature) {
    return rows.filter((row) => {
      return row[10].toLowerCase().includes(feature);
    })
  }

  onClick(feature) {
    this.setState({
      getPark: this.filterFeature(this.state.getPark, feature)
    })
    console.log(this.state.getPark)
  }
   

  render() {
    let parks = this.state.getPark;
    const features = [
      'Adult Fitness Equipment', 'Baseball/Softball', 'Basketball', 'Bike Polo', 'Bike Trail', 'Boat Launch', 'Boat Moorage', 'Community Building', 'Community Center', 'Creek', 'Cricket', 'Decorative Fountain', 'Disc Golf', 'Dog Off Leash Area', 'Environmental Learning Center', 'Fire Pit', 'Fishing', 'Flag Football', 'Football', 'Garden', 'Golf', 'Green Space', 'Guarded Beach', 'Hiking Trails', 'Historic Landmark', 'Horseshoe Pits', 'Lacrosse', 'Lawn Bowling', 'Marination Ma Kai', 'Model Boat Pond', 'NO Beach Access', 'P-Patch Community Garden', 'Paths', 'Pesticide Free', 'Pickleball Court', 'Picnic Sites', 'Play Area', 'Pool', 'Rental Facility', 'Restrooms', 'Rugby', 'Scuba Diving', 'Skatepark', 'Skatespot', 'Soccer', 'T-Ball', 'Tennis Backboard', 'Tennis Court', 'Tennis Lights', 'Track', 'Ultimate', 'View', 'Wading Pool or Water Feature', 'Waterfront', 'Weddings and Ceremonies', 'Woods'
    ];
    parks = parks.slice(0, 20)

		return (
      !this.state.isLoading && 
        <div className="page-wrapper">

    			<SideBar
            children={features}
            onClick={this.onClick.bind(this, 'Water')}/>
          <div className="list-container">
            {parks.map((park)=> {
              return (
                <Park
                  key={park[0]}
                  className="list-item"
                  name={park[9]}
                  feature_desc={park[10]}
                  // hours={park[11]}
                  location={park[14]}
                />)
            })}
    			</div>
          
        </div>
      


		);  
    
  }
}
