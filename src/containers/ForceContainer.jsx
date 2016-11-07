import { connect } from 'react-redux';
import ForcePanel from '../components/ForcePanel/ForcePanel';

const mapStateToProps = (state) => {
  return {
    nodeCount: state.nodes.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onCountChange: (newCount) => {
    //   // dispatch(changeCount(newCount))
    // }
  }
}

const ForceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForcePanel);

export default ForceContainer;
