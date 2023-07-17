import React, { useState } from 'react';
import UserContext from './UserContext';
import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user ? <ChatRoom /> : <SignIn />}
    </UserContext.Provider>
  );
}

export default App;
