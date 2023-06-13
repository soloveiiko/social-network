import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogsReducer'
import './style.css';
import Dialogs from "./index";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateMessageInput: (text) => {
      dispatch(updateMessageActionCreator(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;