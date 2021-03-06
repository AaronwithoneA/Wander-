import {createReview} from '../../actions/review_actions';
import {connect} from 'react-redux';
import ReviewForm from './review_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => {
  return {
  createReview: review => dispatch(createReview(review))
};};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
