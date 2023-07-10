import React, { useState } from 'react';
import { Button, TextField, Box } from '@material-ui/core';

function UsernameInput({ setUsername }) {
  const [inputUsername, setInputUsername] = useState('');

  const handleUsernameChange = (event) => {
    setInputUsername(event.target.value);
  };

  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    setUsername(inputUsername);
  };

  return (
    <Box component="form" onSubmit={handleUsernameSubmit}>
      <TextField
        label="名前"
        value={inputUsername}
        onChange={handleUsernameChange}
      />
      <Button type="submit" variant="contained" color="primary">
        送信
      </Button>
    </Box>
  );
}

export default UsernameInput;
