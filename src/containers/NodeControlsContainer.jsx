import { connect } from 'react-redux';
import { changeCount } from '../redux/nodes/actions';
import NodeControls from '../components/NodeControls/NodeControls';


const mapStateToProps = (state) => {
  return {
    count: state.nodes.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCountChange: (newCount) => {
      dispatch(changeCount(newCount))
    }
  }
}

const NodeControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NodeControls);

export default NodeControlsContainer;
