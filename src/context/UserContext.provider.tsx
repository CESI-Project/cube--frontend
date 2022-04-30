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

  const logout = () => {
    setCurrentUser(undefined);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    checkLogin();
  }, [isAuthenticated]);

  const context = {
    currentUser, setCurrentUser, checkLogin, logout, isAuthenticated, setIsAuthenticated,
  };

  return <UserContextProvider value={context}>{children}</UserContextProvider>;
};
