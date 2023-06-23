import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogs'
import './style.css';
import Dialogs from "../../pages/dialogs/dialogs";
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