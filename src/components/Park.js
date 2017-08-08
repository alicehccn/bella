import React from 'react';
import PropTypes from 'prop-types';


export default class Park extends React.Component {

  static displayName = 'Park';

  static PropTypes = {
    className: PropTypes.string.isRequired,
  	pmaid: PropTypes.number.isRequired,
  	name: PropTypes.string.isRequired,
  	feature_desc: PropTypes.string.isRequired,
  	hours: PropTypes.string.isRequired,
  	location: PropTypes.string.isRequired
  }

  render() {
  	const { className, pmaid, name, feature_desc, hours, location } = this.props;
		return (
			<div className={className} key={pmaid}>
		  	<div>{name}</div>
		  	<div>{feature_desc}</div>
		  	<div>{hours}</div>
		  	<div>{location}</div>
			</div>
		);  	
  }
}
