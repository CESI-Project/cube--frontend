import {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { UserContextProvider } from './user.context';
import { User } from '../models/User';

interface UserContextProviderProps {
    children: ReactNode;
}

export const UserInfoProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentTag, setCurrentTag] = useState<string>('');

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const checkLogin = () => {
    const { accessToken } = user;

    if (accessToken) {
      setCurrentUser(user);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const logOut = () => {
    setCurrentUser(undefined);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    checkLogin();
  }, [isAuthenticated]);

  const context = {
    currentUser,
    setCurrentUser,
    checkLogin,
    logOut,
    isAuthenticated,
    setIsAuthenticated,
    currentTag,
    setCurrentTag,
  };

  return <UserContextProvider value={context}>{children}</UserContextProvider>;
};
