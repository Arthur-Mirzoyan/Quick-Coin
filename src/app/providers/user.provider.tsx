import { PropsWithChildren, useContext, useState } from 'react';
import { createContext } from 'react';
import { UserModel } from '@models/user.model';
import { Generator } from '@utils/generator';

const UserContext = createContext({
  user: Generator.user(),
  setUser: (info: UserModel) => {},
});

export default function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState(Generator.user());
  const contextValue = { user, setUser };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);
