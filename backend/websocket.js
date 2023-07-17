const WebSocket = require('ws');

const websocketServer = () => {
  const wss = new WebSocket.Server({ port: 8080 });

  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      const { username, text } = JSON.parse(message);
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ username, text }));
        }
      });
    });
  });
};

module.exports = websocketServer;
