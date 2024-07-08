import { useState } from 'react';

const useUser = () => {
  const getUsername = () => localStorage.getItem('username') || undefined;

  const [username, setUsername] = useState<string | undefined>(getUsername());

  const setUser = (username: string) => {
    localStorage.setItem('username', username);
    setUsername(username);
  };

  const logout = () => {
    localStorage.removeItem('username');
    setUsername(undefined);
  };

  return {
    username,
    setUser,
    logout,
    isLoggedIn: !!username
  };
};

export default useUser;
