import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogs/dialogs'
import './style.css';
import Dialogs from "../../pages/dialogs/dialogs";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogs
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