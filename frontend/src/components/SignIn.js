import React, { useContext, useState } from 'react';
import UserContext from '../UserContext';

function SignIn() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="ユーザー名を入力してください"
        required
      />
      <button type="submit">サインイン</button>
    </form>
  );
}

export default SignIn;
