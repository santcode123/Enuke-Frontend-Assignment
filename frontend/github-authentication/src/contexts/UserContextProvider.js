import React, { useState, useMemo } from 'react';

// initially users information is null
export const UserContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const value = useMemo(() => [userInfo, setUserInfo], [userInfo]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
