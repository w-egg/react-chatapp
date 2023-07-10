import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, Box, Typography } from '@material-ui/core';
import UsernameInput from './components/UsernameInput';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';

function App() {
  const [username, setUsername] = useState(null);
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    setWs(ws);

    ws.onmessage = (message) => {
      const data = JSON.parse(message.data);
      setMessages((messages) => [...messages, data]);
    };

    return () => ws.close();
  }, []);

  const sendMessage = (text) => {
    ws.send(JSON.stringify({ username, text }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box mt={8}>
        <Typography component="h1" variant="h5">
          チャット
        </Typography>
        {username ? (
          <>
            <MessageList messages={messages} />
            <MessageInput sendMessage={sendMessage} />
          </>
        ) : (
          <UsernameInput setUsername={setUsername} />
        )}
      </Box>
    </Container>
  );
}

export default App;
