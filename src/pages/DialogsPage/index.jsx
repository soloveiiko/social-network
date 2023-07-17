import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addMessageActionCreator,
  updateMessageActionCreator,
} from '../../redux/dialogs/dialogs'
import DialogItem from '../../components/Dialogs/DialogItem'
import MessageItem from '../../components/Dialogs/MessageItem'
import styles from './style.module.css'

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
    <div className={styles.dialogs}>
      <div className={styles.contacts}>
        {dialogs.dialogs.map((el) => (
          <DialogItem key={el.id} name={el.name} id={el.id} image={el.image} />
        ))}
      </div>
      <div className={styles.messages}>
        <div className={styles.second_user}>
          {dialogs.messagesFirstUser.map((el) => (
            <MessageItem key={el.id} message={el.message} />
          ))}
        </div>
        <div className={styles.first_user}>
          {dialogs.messagesSecondUser.map((el) => (
            <MessageItem key={el.id} message={el.message} />
          ))}
        </div>
      </div>
      <div className={styles.new_message}>
        <textarea
          className={styles.message_textarea}
          onChange={updateMessageInput}
          value={dialogs.messageValue}
        ></textarea>
        <button className={styles.send_btn} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  )
}
export default Index
