import React from 'react';
import DialogItem from '../../components/dialogs/dialogItem/dialogItem';
import MessageItem from '../../components/dialogs/messageItem/messageItem';
import '../../components/dialogs/style.css';

const Dialogs = (props) => {
    let dialogElements =
        props.dialogsPage.dialogs.map(el =>
            <DialogItem name={el.name} id={el.id} image={el.image}/>)

    let messageFirstUser =
        props.dialogsPage.messagesFirstUser.map(el =>
            <MessageItem message={el.message}/>)

    let messageSecondUser =
        props.dialogsPage.messagesSecondUser.map(el =>
            <MessageItem message={el.message}/>)

    let sendMessage = () => {
        props.sendMessage();
    }

    let updateMessageInput = (e) => {
        let text = e.target.value;
        props.updateMessageInput(text);
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
                          value={props.dialogsPage.messageValue}></textarea>
                <button className='dialogs__send-btn' onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs;