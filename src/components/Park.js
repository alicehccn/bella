import React from 'react';
import PropTypes from 'prop-types';


export default class Park extends React.Component {

  static displayName = 'Park';

  static PropTypes = {
  	pmaid: PropTypes.number.isRequired,
  	name: PropTypes.string.isRequired,
  	feature_desc: PropTypes.string.isRequired,
  	hours: PropTypes.string.isRequired,
  	location: PropTypes.string.isRequired
  }

  render() {
  	const { pmaid, name, feature_desc, hours, location } = this.props;
		return (
			<div className="">
		  	<div>{pmaid}</div>
		  	<div>{name}</div>
		  	<div>{feature_desc}</div>
		  	<div>{hours}</div>
		  	<div>{location}</div>
			</div>
		);  	
  }
}
