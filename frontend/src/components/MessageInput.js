import React, { useState, useContext } from 'react';
import UserContext from '../UserContext';

function MessageInput({ ws }) {
  const { user } = useContext(UserContext);
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const msg = {
      username: user,
      text: message,
    };
    ws.send(JSON.stringify(msg));
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="メッセージを入力..."
        required
      />
      <button type="submit">送信</button>
    </form>
  );
}

export default MessageInput;
