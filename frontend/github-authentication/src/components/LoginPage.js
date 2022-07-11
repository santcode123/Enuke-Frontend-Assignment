import { useCallback } from 'react';

//images
import airplane from '../images/airplane.png';

const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URL } = process.env;

export const LoginPage = () => {
  const handleFormSubmit = useCallback(e => {
    e.preventDefault();
    alert('Only github login is supported as of now ');
  }, []);

  return (
    <div className="login-page">
      <div className="login-info-container">
        <div className="login-sidebar">
          <div>Email</div>
          <div>Mobile</div>
        </div>
        <div className="login-main">
          <form onSubmit={handleFormSubmit}>
            <header>Login</header>
            <label htmlFor="user-email">Email</label>
            <input id="user-email" placeholder="Email"></input>
            <label htmlFor="user-email">Password</label>
            <input id="user-password" placeholder="Password"></input>
            <button>Login</button>
          </form>
          <button className="github-login-button">
            <a
              href={`https://github.com/login/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=user&redirect_uri=${REACT_APP_REDIRECT_URL}`}
            >
              Login with GitHub
            </a>
          </button>
        </div>
      </div>
      <img src={airplane} alt="airplane" width={300} height={300} className="airplane-image" />
    </div>
  );
};
