import axios from 'axios';
//hooks
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';

export const useFetchUserInfo = ({ client_id, client_secret, redirect_uri }) => {
  const [userInfo, setUserInfo] = useUserContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { search: searchPath } = useLocation();
  const [, code] = searchPath.split('=');

  useEffect(() => {
    if (code) {
      axios
        .post('/authenticate', {
          code,
          client_id,
          client_secret,
          redirect_uri,
        })
        .then(res => {
          setUserInfo(res.data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
        });
    }
  }, [code, setUserInfo, client_id, client_secret, redirect_uri]);

  return {
    loading,
    error,
    userInfo,
  };
};
