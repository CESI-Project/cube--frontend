import { createContext, useContext } from 'react';
import { User } from '../models/User';

export interface UserInfo {
  currentUser?: User;
  setCurrentUser: (user: User | undefined) => void
  checkLogin: () => void;
  logout: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (prevState: boolean) => void;
  currentTag: string
  setCurrentTag: (prevState: string) => void;
}

export const userContext = createContext<UserInfo>({} as any);
export const UserContextProvider = userContext.Provider;
export const useUserContext = () => useContext(userContext);
