import React,{forwardRef} from 'react';
import './Message.css';
import avatar from './assets/avatar2.png'


const Message = forwardRef((props,ref) => {
    const isUser = props.curruser === props.text.username;
    return (
        <div ref={ref} className={`message`}>
            <div className={`message__block ${isUser ? `message__block__user` : ``}`}>
                {!isUser && <div className="message__name">{props.text.username}</div>}
                <div class="message__user__details">
                    {!isUser && <img src={avatar} className="message__guest__user__avatar" />}
                    <div className={`message__text ${isUser ? `message__user` : ``}`}>
                        <div>{props.text.message}</div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Message;