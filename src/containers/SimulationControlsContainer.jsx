import { connect } from 'react-redux';
import { changeCount, restartSim, updateSim } from '../redux/sim/actions';
import NodeControls from '../components/SimulationControls/SimulationControls';


const mapStateToProps = (state) => {
  return {
    count: state.sim.nodeCount,
    attrs: state.sim.attrs,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCountChange: (newCount) => {
      dispatch(changeCount(newCount))
    },
    onRestart: () => {
      dispatch(restartSim())
    },
    onAttrUpdate: (forceIndex, attrIndex, newValue) => {
      dispatch(updateSim({forceIndex, attrIndex, newValue}))
    }
  }
}

const SimulationControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NodeControls);

export default SimulationControlsContainer;
