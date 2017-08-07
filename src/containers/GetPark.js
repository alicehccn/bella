import ParkCards from '../components/ParkCards';
import { connect } from 'react-redux';
// import { getPark } from '../actions';

const mapStateToProps = state => {
  return {
    data: state.getPark
  }
}

export default connect(mapStateToProps)(ParkCards);