import { connect } from 'react-redux';
import { addForce, removeForce } from '../redux/forces/actions';
import ForcesControls from '../components/ForcesControls/ForcesControls';


const mapStateToProps = (state) => {
  return {
    forces: state.forces.forces
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onForceAdd: (forceId) => {
      dispatch(addForce(forceId))
    },
    onForceRemove: (forceIndex) => {
      dispatch(removeForce(forceIndex))
    }
  }
}

const ForcesControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForcesControls);

export default ForcesControlsContainer;
