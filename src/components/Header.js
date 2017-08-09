import React from 'react';
// import PropTypes from 'prop-types';


export default class Header extends React.Component {

  static displayName = 'Header';

  render() {
		return (
			<div className="navbar">
		  	<span className="header"><h1>Bella</h1></span>
			</div>
		);  	
  }
}
