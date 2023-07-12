import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addMessageActionCreator,
  updateMessageActionCreator,
} from '../../redux/dialogs/dialogs'
import DialogItem from '../../components/Dialogs/DialogItem'
import MessageItem from '../../components/Dialogs/MessageItem'
import './style.css'

const Index = () => {
  const dialogs = useSelector((state) => state.dialogs)
  const dispatch = useDispatch()
  const sendMessage = () => {
    dispatch(addMessageActionCreator())
  }

  const updateMessageInput = (e) => {
    let text = e.target.value
    dispatch(updateMessageActionCreator(text))
  }

  return (
    <div className="dialogs">
      <div className="dialogs__contacts contacts">
        {dialogs.dialogs.map((el) => (
          <DialogItem key={el.id} name={el.name} id={el.id} image={el.image} />
        ))}
      </div>
      <div className="dialogs__messages messages">
        <div className="messages__second-user">
          {dialogs.messagesFirstUser.map((el) => (
            <MessageItem key={el.id} message={el.message} />
          ))}
        </div>
        <div className="messages__first-user">
          {dialogs.messagesSecondUser.map((el) => (
            <MessageItem key={el.id} message={el.message} />
          ))}
        </div>
      </div>
      <div className="dialogs__new-message">
        <textarea
          className="dialogs__message-textarea"
          onChange={updateMessageInput}
          value={dialogs.messageValue}
        ></textarea>
        <button className="dialogs__send-btn" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  )
}
export default Index
