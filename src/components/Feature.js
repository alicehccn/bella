import React from 'react';
import PropTypes from 'prop-types';

export default class Feature extends React.Component {

  static displayName = 'Feature'

  static PropTypes = {
    item: PropTypes.string.isRequired,
  }

	render(){
		
		return (
			<div>{this.props.item}</div>
		)
	}
	
}