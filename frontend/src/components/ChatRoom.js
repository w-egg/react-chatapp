import React, { useState, useEffect, useContext } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserContext from '../UserContext';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5000');

    ws.onopen = () => {
      console.log('connected');
    };

    ws.onmessage = (message) => {
      setMessages([...messages, JSON.parse(message.data)]);
    };

    ws.onclose = () => {
      console.log('disconnected');
    };

    setWs(ws);

    return () => {
      ws.close();
    };
  }, [messages]);

  const sendMessage = (text) => {
    ws.send(JSON.stringify({ username: user.username, text: text }));
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default ChatRoom;
