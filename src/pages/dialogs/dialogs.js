import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogs/dialogs';
import DialogItem from '../../components/dialogs/dialogItem/dialogItem';
import MessageItem from '../../components/dialogs/messageItem/messageItem';
import './style.css';

const Dialogs = () => {

  const dialogs = useSelector(state => state.dialogs);
  const dispatch = useDispatch();
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
        {
          dialogs.dialogs.map(el =>
            <DialogItem name={el.name} id={el.id} image={el.image} />)
        }
      </div>
      <div className='dialogs__messages messages'>
        <div className='messages__second-user'>
          {
            dialogs.messagesFirstUser.map(el =>
              <MessageItem message={el.message} />)
          }
        </div>
        <div className='messages__first-user'>
          {
            dialogs.messagesSecondUser.map(el =>
              <MessageItem message={el.message} />)
          }
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