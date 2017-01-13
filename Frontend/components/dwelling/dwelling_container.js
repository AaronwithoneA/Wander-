import Dwelling from './dwelling';
import {connect} from 'react-redux';
import {fetchDwelling} from '../../actions/dwelling_actions';
import { selectDwelling } from '../../reducers/selectors';

const mapStateToProps = (state, {params}) => {
  const dwellingId = parseInt(params.dwellingId);
  const dwelling = selectDwelling(state, dwellingId);
  return {
    dwellingId,
    dwelling
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDwelling: id => dispatch(fetchDwelling(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Dwelling);
