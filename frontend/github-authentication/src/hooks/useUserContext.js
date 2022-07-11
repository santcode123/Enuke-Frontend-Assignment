import { useContext } from 'react';
import { UserContext } from '../contexts/UserContextProvider';

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('please use UserContext inside UserContext provider');
  return context;
};
