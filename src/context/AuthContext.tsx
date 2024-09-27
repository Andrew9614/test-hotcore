'use client';

import { User } from '@/models/profile';
import { ReactNode, createContext, useState } from 'react';

export type AuthContextDataType = {
  isAuth: boolean;
  userInfo: User;
};

type AuthContextType = {
  authData: AuthContextDataType | null;
  setAuthData: (auth: AuthContextDataType | null) => void;
};

type AuthProviderType = {
  children: ReactNode;
  auth: AuthContextDataType | null;
};

export const AuthContext = createContext<AuthContextType>({
  authData: null,
  setAuthData: () => {},
});

export const AuthProvider = ({ children, auth }: AuthProviderType) => {
  const [authData, setAuthData] = useState(auth);
  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
