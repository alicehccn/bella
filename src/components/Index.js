import React from 'react';
import PropTypes from 'prop-types';
import Park from './Park';
import SideBar from './SideBar';
import Selector from './Selector';

export default class Index extends React.Component {

  static displayName = 'Index';

  constructor(props){
    super(props);
    this.state = {
      getPark: [],
      isLoading: true,
      filteredPark: [],
      features: []
    }
  }

  componentDidMount() {
    return fetch('https://data.seattle.gov/api/views/j9km-ydkc/rows.json')
    .then(response => response.json())
    .then(json => this.setState({
      getPark: json.data,
      isLoading: false,
      filteredPark: json.data
    }));
  }

  filterByFeature(rows, feature) {
    return rows.filter((row) => {
      return row[10].toLowerCase().includes(feature.toLowerCase());
    })
  }

  addClick(feature) {
    const parkWithFeature = this.filterByFeature(this.state.getPark, feature)
    if (this.state.filteredPark.length === this.state.getPark.length) {
      this.setState({
        filteredPark: parkWithFeature,
      })
    } else {
      this.setState({
        filteredPark: this.state.filteredPark.concat(parkWithFeature)
      })
    }
    this.state.features.push(feature)
    console.log(this.state.features)
  }

  removeClick(selector) {
    this.setState({
      features: this.state.features.splice(this.state.features.indexOf(selector), 1),
    })
    console.log(this.state.features)
  }
   

  render() {
    let parks = this.state.filteredPark;
    const features = [
      'Fitness', 'Baseball', 'Basketball', 'Bike', 'Boat', 'Community', 'Creek', 'Cricket', 'Decorative Fountain', 'Disc Golf', 'Dog Off Leash Area', 'Fire Pit', 'Fishing', 'Football', 'Garden', 'Golf', 'Green Space', 'Beach', 'Hiking Trails', 'Historic Landmark', 'Horseshoe Pits', 'Lacrosse', 'Lawn Bowling', 'Marination Ma Kai', 'Garden', 'Paths', 'Pesticide Free', 'Pickleball', 'Picnic', 'Play Area', 'Pool', 'Rental Facility', 'Restrooms', 'Rugby', 'Scuba Diving', 'Skatepark', 'Skatespot', 'Soccer', 'T-Ball', 'Tennis', 'Track', 'Ultimate', 'View', 'Waterfront', 'Ceremonies', 'Woods'
    ];
    // parks = parks.slice(0, 20)
		return (
      !this.state.isLoading && 
        <div className="page-wrapper">

    			<SideBar>
            <Selector >
              {this.state.features.map((feature, i) => 
                <button 
                  className="selector" 
                  key={i}
                  onClick={this.removeClick.bind(this, feature)}>
                  {feature}
                </button>
                )}
            </Selector>

            {features.map((feature, i) => {
              return (
                <a 
                  className="sidebar-item"
                  onClick={this.addClick.bind(this, feature)}
                  key={i}>
                  {feature}
                </a>)
            })}
          </SideBar>

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
