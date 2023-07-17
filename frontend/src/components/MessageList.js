import React from 'react';

function MessageList({ messages }) {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>
          <strong>{message.username}: </strong>
          {message.text}
        </li>
      ))}
    </ul>
  );
}

export default MessageList;
