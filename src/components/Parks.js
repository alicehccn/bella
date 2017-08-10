import React from 'react';
import PropTypes from 'prop-types';


export default class Parks extends React.Component {

  static displayName = 'Parks';

  static PropTypes = {
    parks: PropTypes.array.isRequired,
  }

  render() {
  	const { parks } = this.props;
		return (
      <div className="list-container">
        {parks.map((park) => 
          <div className="list-item" key={park[0]}>
            <h4>{park[9]}</h4>
            <div>{park[10]}</div>
            <div>{park[14]}</div>
          </div>
        )}
      }
      </div>  
    );
  }
}
