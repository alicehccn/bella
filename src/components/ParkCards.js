import React from 'react';
import PropTypes from 'prop-types';
import Park from './Park';

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
      getPark: json.data.slice(0,20),
      isLoading: false
    }));
  }
   

  render() {
  	// const { data } = this.props;
    // console.log(this.props)
    // const parks = this.state.getPark;
		return (
			<div className="list-container">
        { !this.state.isLoading ? 
          this.state.getPark.map((park)=> {
          return (
            <Park
              key={park[0]}
              className="list-item"
              name={park[9]}
              feature_desc={park[10]}
              hours={park[11]}
              location={park[14]}
            />)
        }): null}
			</div>
		);  	
  }
}
