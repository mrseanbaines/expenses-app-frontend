import { connect } from 'react-redux';
import ExpenseCard from '../components/ExpenseCard';
import { commentsActions, receiptsActions } from '../store/actions';

const mapDispatchToProps = dispatch => ({
  addComment: args => dispatch(commentsActions.addComment(args)),
  uploadReceipt: args => dispatch(receiptsActions.uploadReceipt(args)),
});

export default connect(
  null,
  mapDispatchToProps
)(ExpenseCard);
