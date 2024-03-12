import { PropsWithChildren, useContext, useState } from 'react';
import { createContext } from 'react';
import { Helper } from '@utils/helper';
import { UserInfoModel } from '@models/UserInfo.model';

type User = {
  userInfo: UserInfoModel;
  setUserInfo: Function;
};

const UserContext = createContext<User>({
  userInfo: Helper.generateUserInfo(),
  setUserInfo: (info: UserInfoModel) => {},
});

function UserProvider({ children }: PropsWithChildren) {
  const [userInfo, setUserInfo] = useState<UserInfoModel>(Helper.generateUserInfo());

  const updateUserInfo = (info: UserInfoModel): void => setUserInfo(info);

  const contextValue: User = {
    userInfo,
    setUserInfo: updateUserInfo,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

export default UserProvider;
export const useUser = () => useContext(UserContext);
