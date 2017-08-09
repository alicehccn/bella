import React from 'react';
import PropTypes from 'prop-types';

import Feature from './Feature';

export default class SideBar extends React.Component {

  static displayName = 'SideBar'

  constructor(props){
    super(props);
  }

  static PropTypes = {
    onClick: PropTypes.func,
    children: PropTypes.array.isRequired
  }
  
	render(){
		return (
			<div className="sidebar">
				{this.props.children.map((feature, i) => {
					return (
						<a 
							className="sidebar-item"
							onClick={this.props.onClick}
							key={i}
							name={feature}>
							{feature}
						</a>
					)
				})}
			</div>
		)
	}
	
}