import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import avatar from './assets/avatar.png'
import FlipMove from 'react-flip-move';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');


  useEffect(() => {
    const name = prompt("Enter your name to start the chat");
    setUserName(name ? name : 'Unknown');
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message:doc.data()})))
      });
  }, []);


  const handleMessage = (e) => {
    setInput(e.target.value);
  }

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username: userName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    //setMessages([...messages,{username: userName, message:input}]);
    setInput('');
  }

  return (
    <div className="App">
      <main className="App__main">
        <header className="App__main__header">
          <img src={avatar} className="App__user__avatar" />
          Hey! {userName}
        </header>
        <div className="App__main__body">
          <FlipMove>
          {
            messages.map(({id,message}) => (
              <Message key={id} curruser={userName} text={message} />
            ))}
            </FlipMove>
        </div>
        <div className="App__main__footer">
          <form className="App__main__footer__form">
            <input className="App__footer__input" value={input} autoFocus={true} placeholder="Send message..." onChange={(e) => handleMessage(e)} type="text" />
            <button className="App__footer__send__button" type="submit" disabled={!input} onClick={(e) => sendMessage(e)}>send</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
