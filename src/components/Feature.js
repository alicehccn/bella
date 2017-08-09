import React from 'react';
import PropTypes from 'prop-types';

export default class Feature extends React.Component {

  static displayName = 'Feature'

  constructor(props){
    super(props);
  }

  static PropTypes = {
    item: PropTypes.string.isRequired,
  }

	render(){
		
		return (
			<div>{this.props.item}</div>
		)
	}
	
}