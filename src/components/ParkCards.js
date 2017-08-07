import React from 'react';
import PropTypes from 'prop-types';
import Park from './Park';

export default class ParkCards extends React.Component {

  static displayName = 'ParkCards';

  // static PropTypes = {
  // 	data: PropTypes.array.isRequired
  // }

  componentDidMount() {
    console.log(this.state)
    return fetch('https://data.seattle.gov/api/views/j9km-ydkc/rows.json')
    .then(response => response.json())
    .then(json => this.setState({
      getPark: json.data
    }));
  }
   

  render() {
  	// const { data } = this.props;
    // console.log(this.state.getPark)
    // const parks = this.state.getPark;
		return (
			<div className="">
        <Park 
          pmaid='Something'
          name='Something'
          feature_desc='Something'
          hours='Something'
          location='Something'
        />
			</div>
		);  	
  }
}
