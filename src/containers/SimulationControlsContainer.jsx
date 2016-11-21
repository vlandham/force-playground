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
    onCountChange: (forceIndex, attrIndex, newValue) => {
      dispatch(changeCount(newValue))
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
