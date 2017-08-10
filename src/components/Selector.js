import React from 'react';
import PropTypes from 'prop-types';


export default class Selector extends React.Component {

  static displayName = 'Selector';

  static PropTypes = {
    children: PropTypes.array.isRequired
  }

  render() {
		return (
			<div className="selector-container">
		  	{this.props.children}
			</div>
		);  	
  }
}
