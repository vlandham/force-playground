import { connect } from 'react-redux';
import { changeCount, restartSim } from '../redux/sim/actions';
import NodeControls from '../components/SimulationControls/SimulationControls';


const mapStateToProps = (state) => {
  return {
    count: state.sim.nodeCount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCountChange: (newCount) => {
      dispatch(changeCount(newCount))
    },
    onRestart: () => {
      dispatch(restartSim())
    }
  }
}

const SimulationControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NodeControls);

export default SimulationControlsContainer;
