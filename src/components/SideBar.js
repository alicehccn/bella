import React from 'react';
import PropTypes from 'prop-types';


export default class SideBar extends React.Component {

  static displayName = 'SideBar'

  static PropTypes = {
    children: PropTypes.array.isRequired
  }
  
	render(){
		return (
			<div className="sidebar">
				{this.props.children}
			</div>
		)
	}
	
}