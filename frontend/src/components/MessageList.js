import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

function MessageList({ messages }) {
  return (
    <List>
      {messages.map((message, i) => (
        <ListItem key={i}>
          <ListItemText primary={`${message.username}: ${message.text}`} />
        </ListItem>
      ))}
    </List>
  );
}

export default MessageList;
