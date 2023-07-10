import React, { useState } from 'react';
import { Button, TextField, Box } from '@material-ui/core';

function MessageInput({ sendMessage }) {
  const [inputMessage, setInputMessage] = useState('');

  const handleMessageChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    sendMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <Box component="form" onSubmit={handleMessageSubmit}>
      <TextField
        label="入力"
        value={inputMessage}
        onChange={handleMessageChange}
      />
      <Button type="submit" variant="contained" color="primary">
        送信
      </Button>
    </Box>
  );
}

export default MessageInput;
