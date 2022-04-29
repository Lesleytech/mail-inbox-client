import { createContext, FC, ReactNode } from 'react';

import { UserType } from '../types';

const defaultUser: UserType = {
  email: 'john@example.com',
  name: 'John Doe',
  _id: 1,
};
const AuthContext = createContext<UserType>(defaultUser);

const AuthProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <AuthContext.Provider value={defaultUser}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
