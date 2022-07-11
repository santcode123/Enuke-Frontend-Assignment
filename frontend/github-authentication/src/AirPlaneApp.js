//components
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';

//hooks
import { useFetchUserInfo } from './hooks/useFetchUserInfo';

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET_ID, REACT_APP_REDIRECT_URL } = process.env;

function AirPlaneApp() {
  const { userInfo, loading, error } = useFetchUserInfo({
    client_id: REACT_APP_CLIENT_ID,
    client_secret: REACT_APP_CLIENT_SECRET_ID,
    redirect_uri: REACT_APP_REDIRECT_URL,
  });

  if (error) {
    console.log('error', error);
    return <div className="error-message">backend error occurred please check console for more Info</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={!loading ? <Dashboard userData={userInfo} /> : <div>Dashboard is Loading..</div>} />
      </Routes>
    </div>
  );
}

export default AirPlaneApp;
