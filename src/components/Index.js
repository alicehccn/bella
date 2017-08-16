import React from 'react';
import PropTypes from 'prop-types';
import Parks from './Parks';
import SideBar from './SideBar';
import Selector from './Selector';

/*
Todo:
- get current geo
*/

const FEATURES = [
  'Fitness', 'Baseball', 'Basketball', 'Bike', 'Boat', 'Community', 'Creek', 'Cricket', 'Decorative Fountain', 'Disc Golf', 'Dog Off Leash Area', 'Fire Pit', 'Fishing', 'Football', 'Garden', 'Golf', 'Green Space', 'Beach', 'Hiking Trails', 'Historic Landmark', 'Horseshoe Pits', 'Lacrosse', 'Lawn Bowling', 'Marination Ma Kai', 'Garden', 'Paths', 'Pesticide Free', 'Pickleball', 'Picnic', 'Play Area', 'Pool', 'Rental Facility', 'Restrooms', 'Rugby', 'Scuba Diving', 'Skatepark', 'Skatespot', 'Soccer', 'T-Ball', 'Tennis', 'Track', 'Ultimate', 'View', 'Waterfront', 'Ceremonies', 'Woods'
];

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
      filteredPark: []
    }));
  }

  filterByFeature(rows, feature) {
    return rows.filter((row) => {
      return row[10].toLowerCase().includes(feature.toLowerCase());
    })
  }

  removeFeature(rows, feature) {
    return rows.filter((row) => {
      return !row[10].toLowerCase().includes(feature.toLowerCase());
    })
  }

  addClick(feature) {
    const addedFeature = this.filterByFeature(this.state.getPark, feature)
    if (!this.state.features.includes(feature)) {
      if (this.state.filteredPark.length === this.state.getPark.length) {
        this.setState({
          filteredPark: addedFeature,
        })
      } else {
        this.setState({
          filteredPark: this.state.filteredPark.concat(addedFeature)
        })
      }
      this.state.features.push(feature)
    }
  }

  removeClick(selector) {
    this.state.features.splice(this.state.features.indexOf(selector), 1);
    const removedFeature = this.removeFeature(this.state.filteredPark, selector);
    this.setState({
      features: this.state.features,
      filteredPark: removedFeature
    });
  }
   

  render() {
    let parks;
    if (this.state.filteredPark.length > 0) {
      parks = this.state.filteredPark;
    } else {
      parks = this.state.getPark;
    }
    parks = parks.slice(0, 20)

		return (
      !this.state.isLoading && 
        <div className="page-wrapper">

    			<SideBar>
            
            {FEATURES.map((feature, i) => {
              return (
                <span className="sidebar-item">
                  <a 
                    onClick={this.addClick.bind(this, feature)}
                    key={i}>
                    {feature}
                  </a>
                </span>)
            })}

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

          </SideBar>

          <Parks parks={parks} />
            
        </div>
		);  
    
  }
}
