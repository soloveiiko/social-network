import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogs';
import DialogItem from '../../components/dialogs/dialogItem/dialogItem';
import MessageItem from '../../components/dialogs/messageItem/messageItem';
import '../../components/dialogs/style.css';

const Dialogs = (props) => {

  const dialogs = useSelector(state => state.dialogs);
  const dispatch = useDispatch();

  const dialogElements =
    dialogs.dialogs.map(el =>
      <DialogItem name={el.name} id={el.id} image={el.image} />)

  const messageFirstUser =
    dialogs.messagesFirstUser.map(el =>
      <MessageItem message={el.message} />)

  const messageSecondUser =
    dialogs.messagesSecondUser.map(el =>
      <MessageItem message={el.message} />)

  const sendMessage = () => {
    dispatch(addMessageActionCreator());
  }

  const updateMessageInput = (e) => {
    let text = e.target.value;
    dispatch(updateMessageActionCreator(text));
  }

  return (
    <div className='dialogs'>
      <div className='dialogs__contacts contacts'>
        {dialogElements}
      </div>
      <div className='dialogs__messages messages'>
        <div className='messages__second-user'>
          {messageSecondUser}
        </div>
        <div className='messages__first-user'>
          {messageFirstUser}
        </div>
      </div>
      <div className='dialogs__new-message'>
                <textarea className='dialogs__message-textarea'
                          onChange={updateMessageInput}
                          value={dialogs.messageValue}></textarea>
        <button className='dialogs__send-btn' onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}
export default Dialogs;